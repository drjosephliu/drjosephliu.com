/** @jsx jsx */

import { Link, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { FC } from 'react'
import { Box, Flex, Text, jsx } from 'theme-ui'

import useCycleColor from "../hooks/useCycleColor"

const links = [
  { to: `/`, children: `home` },
  { to: `/about`, children: `about` },
  { to: `/posts`, children: `posts` },
  { to: `/projects`, children: `projects` },
]

const Navigation: FC = () => {
  const { cycleColorMode } = useCycleColor();
  const data = useStaticQuery(pageQuery)

  return (
    <header>
      <Flex 
        as="nav" 
        role="navigation" 
        sx={{ 
          height: `7rem`, 
          mb: [4, 5], 
          px: 2,
          flexDirection: ['column', 'column', 'column', 'row']
        }}
      >
        <Flex
          sx={{
            justifyContent: `center`,
            alignItems: `center`,
            p: [3, 3, 3, 0]
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            sx={{
              borderRadius: 99999,
              mr: 2,
              mt: 1
            }}
          />
          <Link
            sx={{
              padding: 2,
              height: `3rem`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `flex-start`,
              color: 'tag',
              ':hover': {
                textDecoration: 'none',
                color: `action`,
              }
            }}
            to="/"
          >
            <Text as="h1" sx={{ fontFamily: "Avenir Next", fontWeight: 700, stroke: 'text' }}>joseph liu</Text>
          </Link>
        </Flex>
        <Flex
          as="ul"
          sx={{
            my: 0,
            pl: 0,
            flex: 1,
            justifyContent: ['space-between', 'space-between', 'space-between', `flex-end`],
            listStyleType: `none`,
          }}
        >
          {links.map(({ to, children }, index) => (
            <Flex as="li" sx={{ alignItems: `center` }} key={to}>
              <Link
                {...{
                  sx: {
                    px: [2, 3],
                    height: 48,
                    display: [`home`, `about`].includes(children) ? [`none`,
                      'none', 'none', `flex`] : `flex`,
                    alignItems: `center`,
                  },
                  to,
                  children,
                }}
              />
            </Flex>
          ))}
          <Flex as="li" sx={{ alignItems: `center` }}>
            <Box
              as="button"
              onClick={cycleColorMode}
              aria-label="Toggle color mode"
              sx={{
                width: 48,
                height: 48,
                m: 0,
                border: 0,
                p: 0,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                lineHeight: 1,
                color: `text`,
                cursor: `pointer`,
                bg: `transparent`,
                appearance: `none`,
                ':hover': {
                  color: `action`,
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="20"
                height="20"
                sx={{
                  border: `1px solid`,
                  borderRadius: `50%`,
                  bg: `currentcolor`,
                }}
              >
                <path
                  d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z"
                  sx={{
                    fill: 'background',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                  }}
                />
              </svg>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </header>
  )
}

export const pageQuery = graphql`
  query navQuery {
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png|ico)/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Navigation
