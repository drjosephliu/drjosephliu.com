/** @jsx jsx */

import { FC } from 'react'
import { jsx } from 'theme-ui'

export interface Tag {
  tagName: string
}

const Tag: FC<Tag> = ({ tagName }) => (
    <span
      key={tagName}
      sx={{
        mr: 2,
        py: 1,
        px: 2,
        display: `inline-block`,
        fontStyle: `italic`,
        fontSize: 2,
        lineHeight: 1,
        color: `text`,
        backgroundColor: `tag`,
      }}
    >
      {tagName.toLowerCase()}
    </span>
)

export default Tag
