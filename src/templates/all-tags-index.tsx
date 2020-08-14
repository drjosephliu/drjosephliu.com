import React, { FC } from "react"
import { Link } from "gatsby"
import { Box, jsx } from "theme-ui"

import Layout from "../components/layout"
import Halo from "../components/halo"
import Intro from "../components/intro"
import Tag from "../components/tag"

export interface AllTagsIndex {
  pageContext: {
    tags: string[]
  }
}

const AllTagsIndex: FC<AllTagsIndex> = ({ pageContext }) => {
  const { tags } = pageContext
  return (
    <Layout>
      <Halo
        title={`Tags Index`}
        url={`https://drjosephliu.com/tags`}
        description={`Index page of all tags`}
      />
      <Box sx={{ maxWidth: `50ch`, mb: 5, px: 3 }}>
        <Intro title={`Tags Index`} description={`Browse posts by tag.`} />
        <Box 
          as="ul" 
          sx={{ 
            'a:focus': { outline: 'none' }, 
            'span:hover': { backgroundColor: 'action' },
            my: 0, 
            pl: 0, 
            listStyleType: `none` 
          }}
        >
          {tags.map((tagName: string) => {
            return (
              <li key={tagName}>
                <Link 
                  to={`/tags/${tagName}`} 
                >
                  <Tag tagName={tagName} />
                </Link>
              </li>
          )})}
        </Box>
      </Box>
    </Layout>
  )
}

export default AllTagsIndex
