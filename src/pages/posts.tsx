/** @jsx jsx */

import { graphql } from 'gatsby'
import { FC } from 'react'
import { Box, jsx } from 'theme-ui'

import ArticlePreview from '../components/article-preview'
import Halo from '../components/halo'
import Intro from '../components/intro'
import Layout from '../components/layout'

export interface PostsProps {
  data: any
}

const Posts: FC<PostsProps> = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <Halo title="Posts Index" url="https://drjosephliu.com/posts" />
      <Box sx={{ maxWidth: `50ch`, mb: 5, px: 3 }}>
        <Intro title="Posts" description="My written thoughts." />
        <Box as="ul" sx={{ my: 0, pl: 0, listStyleType: `none` }}>
          {posts.map(({ node }) => {
            return (
              <Box as="li" key={node.slug} sx={{ pt: 4 }}>
                <ArticlePreview article={node} />
              </Box>
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
}

export default Posts

export const pageQuery = graphql`
  query PostsQuery {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          excerpt(pruneLength: 160)
          tableOfContents
          timeToRead
          slug
        }
      }
    }
  }
`
