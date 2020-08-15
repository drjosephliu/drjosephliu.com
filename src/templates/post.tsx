import React, { FC } from "react"
import { Box, Flex } from 'theme-ui'
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Halo from "../components/halo"
import Intro from "../components/intro"
import ContentsPanel from "../components/contents-panel"
import Tag from "../components/tag"
import { TableOfContents } from "../components/contents-panel"

export interface Post {
  data: {
    mdx: {
      frontmatter: {
        title: string
        tags: string[]
        description: string
        date: string
      }
      body: string
      slug: string
      timeToRead: number 
      tableOfContents: TableOfContents
    }
  },
  location: any
}

const Post: FC<Post> = ({
  data: {
    mdx: {
      frontmatter: {
        title,
        tags,
        description,
        date
      },
      body,
      slug,
      timeToRead,
      tableOfContents
    }
  },
  location
})  => {
  console.log(slug)
  return (
    <Layout>
      <Halo
        title={title}
        url={`https://drjosephliu.com/${slug}`}
        description={description}
        hasCodePenEmbed
      />
      <Box as="article" sx={{ 
        maxWidth: ['45ch', '45ch', '45ch', '55ch', '65ch', '55ch', `62ch`, '65ch'],
        mb: 5, 
        px: 3,
        mx: ['auto', 'auto', 'auto', 'auto', 'auto', '5px', '5px']
        }}
      >
        <Intro
          date={date}
          title={title}
          mins={timeToRead}
        />
        <Box sx={{ 
          mt: '5px', 
          'a:focus': { outline: 'none' }, 
          'span:hover': { backgroundColor: 'action' }
        }}>
          {!!tags.length && tags.map(tagName => (
            <Link 
              key={tagName} 
              to={`/tags/${tagName}`} 
            >
              <Tag tagName={tagName} />
            </Link>
          ))}
        </Box>
        <Flex>
          <Box sx={{ fontFamily: 'Georgia, serif' }}>
            <MDXRenderer>{body}</MDXRenderer> 
          </Box>
          {tableOfContents && tableOfContents.items && (
            <ContentsPanel tableOfContents={tableOfContents} location={location} />
          )}
        </Flex>
      </Box>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
      slug
      timeToRead
      tableOfContents
    }
  }
`
