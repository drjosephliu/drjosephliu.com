/** @jsx jsx */

import { Link } from 'gatsby'
import { FC } from 'react'
import { Box, jsx, Text } from 'theme-ui'

import Tag from './tag'
import TimeToRead from './time-to-read'

export interface ArticlePreviewProps {
  article: {
    excerpt: string
    slug: string
    tableOfContents: any
    timeToRead: number
    frontmatter: {
      date: string
      title: string
      tags: string[]
    }
  }
}

const ArticlePreview: FC<ArticlePreviewProps> = ({ 
  article: { 
    frontmatter: {
      date,
      title,
      tags
    },
    slug,
    excerpt,
    timeToRead,
  }
}) => {
  return (
    <Box
      sx={{ display: `block`, ':hover': { textDecoration: `none` } }}
    >
      <Link to={`/${slug}`}>
        <Text 
          as="h2" 
          sx={{ 
            mt: 1, 
            'a:hover > &': { textDecoration: `underline` },
            fontWeight: 800
          }}
        >
          {title}
        </Text>
      </Link>
      <Text as="p" sx={{ m: `10px 0px`, fontSize: 2, fontFamily: 'Georgia, serif', color: `text`, 'a:hover > &': { color: `text` } }}>
        {date} • <TimeToRead mins={timeToRead} />
      </Text> 
      <Text as="p" sx={{ fontFamily: 'Georgia, serif' }}>
        {excerpt}
      </Text>

      <Box sx={{ mt: '5px' }}>{!!tags.length && tags.map(tagName => (
        <Link 
          key={tagName} 
          to={`/tags/${tagName}`} 
          sx={{ 
            ':focus': { outline: 'none' }, 
            '& > :hover': { backgroundColor: 'action' }
          }}
        >
          <Tag tagName={tagName} />
        </Link>
      ))}
      </Box>
    </Box>
  )
}

export default ArticlePreview
