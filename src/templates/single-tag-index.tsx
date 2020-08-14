import React, { FC } from "react"
import { Box, sx } from 'theme-ui'

import Layout from "../components/layout"
import Halo from "../components/halo"
import Intro from "../components/intro"
import ArticlePreview from "../components/article-preview"

export interface SingleTagIndex {
  pageContext: {
    tagName: string
    posts: any
  }
}

const SingleTagIndex: FC<SingleTagIndex> = ({ pageContext }) => {
  const { tagName, posts } = pageContext
  return (
    <Layout>
      <Halo
        title={`Posts about ${tagName}`}
        url={`https://drjosephliu.com/tags/${tagName}`}
        description={`Index page of all posts with tag ${tagName}`}
      />
      <Box sx={{ maxWidth: `50ch`, mb: 5, px: 3 }}>
        <Intro title={`${tagName}`} description={`All posts about ${tagName}.`} />
        <Box as="ul" sx={{ my: 0, pl: 0, listStyleType: `none` }}>
          {posts.map((post: any, index: number) => {
            console.log("POST: ", post)
            return (
              <Box as="li" key={index} sx={{ pt: 4 }}>
                <ArticlePreview article={post} />
              </Box>
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
}

export default SingleTagIndex
