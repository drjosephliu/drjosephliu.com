const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `Mdx`) {
//     const slug = createFilePath({ node, getNode, basePath: 'posts' })
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve("src/templates/all-tags-index.tsx")
  const singleTagIndexTemplate =
    path.resolve("src/templates/single-tag-index.tsx")

  const postsByTag = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }
        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]
    
    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            slug
            excerpt
            timeToRead
            frontmatter {
              tags
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMdx.edges

  createTagPages(createPage, posts)

  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        slug: node.slug
      }
    })
  })
}
