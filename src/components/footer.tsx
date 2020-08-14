/** @jsx jsx */

import { FC } from 'react'
import { Box, Flex, Divider, jsx, Text } from 'theme-ui'

const links = [
  { href: `https://github.com/drjosephliu`, children: `GitHub` },
  { href: `https://www.linkedin.com/in/dr-joseph-liu/`, children: `LinkedIn` },
]

const Footer: FC = () => {

  return (
    <Box as="footer" sx={{ pb: 5, mt: 6 }}>
      <Divider sx={{ color: 'divider' }} />
      <Flex
        sx={{
          pt: `3.5rem`,
          px: [2, 0],
          flexWrap: `wrap`,
        }}
      >
        {links.map(({ href, children }) => (
          <Flex key={href} sx={{ flexBasis: [`calc(100% / 3)`, `auto`] }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              {...{ href, children }}
              sx={{ height: 48, display: `flex`, alignItems: `center`, px: [2, 3] }}
            />
          </Flex>
        ))}
      </Flex>

      <Box sx={{ mt: 4, px: 3 }}>
        <Text as="small" sx={{ display: [`block`] }}>
          &copy; 2020 Joseph Liu
        </Text>
        <span sx={{ display: [`none`] }}> &middot; </span>
      </Box>

      <Box as="p" sx={{ mt: 4, mx: 3 }}>
        <Text as="small">
          Gatsby-built, Netlify-hosted,{' '}
            modified from {` `}
            <a
              href="https://chrisnager.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris Nager's theme.
            </a>
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
