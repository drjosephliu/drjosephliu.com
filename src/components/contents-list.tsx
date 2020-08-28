import React from "react"
import { Link } from 'gatsby'
import { jsx, Text, Box } from 'theme-ui'

const ContentsList: FC<ContentsList> = ({ contentsList }) => {
  return (
    <Box as="ul" sx={listStyle}>
      {contentsList.map(item => (
        <>
        <Text as="li" key={location.pathname + item.url} sx={listItemStyle}>
          <Link to={location.pathname + item.url} sx={linkStyle}>
            {item.title}
          </Link>
          {item.items && <ContentsList contentsList={item.items} />}
        </Text>
        </>
      ))}
    </Box>
  )
}

const listStyle = {
  m: 0,
  p: 0,
  fontSize: '1rem',
  listStyle: 'none',
  color: '#fff',
  'a': { color: 'text' },
  'a:hover': { 
    textDecoration: 'none',
    color: 'tag'
  }
}

const listItemStyle = {
  margin: '0.3rem 1.0rem',
  listStyleType: 'none',
}

const linkStyle = {
  display: 'inline-block',
  padding: '0.2rem 0',
  width: '100%',
}

export default ContentsList
