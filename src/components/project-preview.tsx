import React, { FC } from 'react'
import Img from 'gatsby-image'
import { Box, Text, jsx } from 'theme-ui'

import Tag from "./tag"

export interface ProjectPreview {
  name: string
  url: string
  image: any
  summary: string
  tags: string[]
}

const ProjectPreview: FC<ProjectPreview> = ({ name, url, image, summary, tags }) => {
  return (
    <Box key={name} as="li" sx={{ my: 4, display: `block`, 'a:hover': {
      textDecoration: 'none' } }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: `block`, ':hover': { textDecoration: `none` } }}
      >
        <Box sx={{ bg: `action` }}>
          {image && (
            <Img
              sizes={{ ...image.childImageSharp.fluid, aspectRatio: 16 / 9 }}
              imgStyle={{ objectPosition: `center top` }}
              alt={name}
            />
          )}
        </Box>

        <Box sx={{ pt: 3 }}>
          <Text as="h1" sx={{ fontSize: 4, 'a:hover > &': { textDecoration: `underline` } }}>
            {name}
          </Text>

          <Text
            as="p"
            sx={{ mt: 1, fontFamily: `Georgia, serif`, color: `text`, 'a:hover > &': { color: `text` } }}
          >
            {summary}
          </Text>

          <Box sx={{ mt: `2px`, color: `text`, 'a:hover > &': { color: `text` } }}>
            {!!tags && !!tags.length && tags.map(tagName => <Tag
            key={tagName} tagName={tagName} />)}
          </Box>
        </Box>
      </a>
    </Box>
  )
}

export default ProjectPreview
