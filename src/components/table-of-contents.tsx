import React, { FC, useState } from 'react';
import { Link } from 'gatsby'
import { jsx, Text, Box, NavLink } from 'theme-ui'


export interface TableOfContents {
  url: string
  title: string
  items: TableOfContents[]
}

export interface ContentsPanel {
  tableOfContents: TableOfContents
  location: any
}

const ContentsPanel: FC<ContentsPanel> = ({ tableOfContents, location }) => {
  const [listItems] = useState(() => {
    if (!tableOfContents.items) {
      return [];
    }
    const mappedLinks: TableOfContents[] = [];
    function mapLinks(items: TableOfContents[]) {
      items.forEach(item => {
        mappedLinks.push(item);
        if (item.items) {
          mapLinks(item.items);
        }
      });
    }
    mapLinks(tableOfContents.items);
    return mappedLinks;
  });

  return (
    <aside sx={asideStyle}>
      <Box as="nav" sx={navStyle}>
        <Text as="p" sx={titleStyle}>Contents</Text>
        <Box as="ul" sx={listStyle}>
          {listItems.map(item => (
            <Text as="li" key={location.pathname + item.url} sx={listItemStyle}>
              <Link to={location.pathname + item.url} sx={linkStyle}>
                {item.title}
              </Link>
            </Text>
          ))}
        </Box>
      </Box>
    </aside>
  );
};

const asideStyle = {
  display: 'none',
  flex: '0 0 16rem',
  fontSize: '0.75rem',
  fontWeight: 600,
}

const navStyle = {
  position: 'fixed',
  overflowX: 'hidden',
  overflowY: 'auto',
  width: '16rem',
  padding: '1rem 1rem',
}

const titleStyle = {
  mt: 0,
  fontSize: '0.9rem',
  fontWeight: 700,
  textTransform: 'uppercase'
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
  margin: '0.3rem 0',
  listStyleType: 'none',
}

const linkStyle = {
  display: 'inline-block',
  padding: '0.2rem 0',
  width: '100%',
}
export default ContentsPanel