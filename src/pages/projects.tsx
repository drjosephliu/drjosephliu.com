/** @jsx jsx */

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FC } from 'react'
import { Box, jsx, Text, Divider } from 'theme-ui'

import Halo from '../components/halo'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Tag from '../components/tag'

export interface ProjectsProps {
  data: any
}

const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <Layout>
      <Halo title="Projects" url="https://chrisnager.com/projects" />
      <Box sx={{ maxWidth: `50ch`, mb: 5, px: 3 }}>
        <Intro title="Projects" description="A handful of things I've built." />
        <Divider />
        <Box as="ul" sx={{ my: 70, pl: 0, display: `grid` }}>
          <Text as="h2" sx={{ textDecoration: 'underline' }}>Work</Text>
          {data.allWorkProjectsYaml.edges.map(
            ({
              node: { name, url, image, summary, tags },
            }: {
              node: {
                name: string
                url: string
                image: {
                  childImageSharp: {
                    fluid: any
                  }
                }
                summary: string
                tags: string[]
              }
            }) => (
              <Box key={name} as="li" sx={{ mt: 4, display: `block` }}>
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

                    <Box sx={{ mt: `2px`, mx: -2, color: `text`, 'a:hover > &': { color: `text` } }}>
                      {!!tags && !!tags.length && tags.map(tagName => <Tag
                      key={tagName} tagName={tagName} />)}
                    </Box>
                  </Box>
                </a>
              </Box>
            ),
          )}
        </Box>
        <Divider />
        <Box as="ul" sx={{ my: 70, pl: 0, display: `grid` }}>
          <Text as="h2" sx={{ textDecoration: 'underline' }}>Personal</Text>
          {data.allPersonalProjectsYaml.edges.map(
            ({
              node: { name, url, image, summary, tags },
            }: {
              node: {
                name: string
                url: string
                image: {
                  childImageSharp: {
                    fluid: any
                  }
                }
                summary: string
                tags: string[]
              }
            }) => (
              <Box key={name} as="li" sx={{ mt: 4, display: `block` }}>
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

                    <Box sx={{ mt: `2px`, mx: -2, color: `text`, 'a:hover > &': { color: `text` } }}>
                      {!!tags && !!tags.length && tags.map(tagName => <Tag
                      key={tagName} tagName={tagName} />)}
                    </Box>
                  </Box>
                </a>
              </Box>
            ),
          )}
        </Box>
      </Box>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query ProjectsQuery {
    allPersonalProjectsYaml {
      edges {
        node {
          url
          name
          summary
          tags
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allWorkProjectsYaml {
      edges {
        node {
          url
          name
          summary
          tags
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
