/** @jsx jsx */

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FC } from 'react'
import { Box, Flex, jsx, Text, Divider } from 'theme-ui'

import Halo from '../components/halo'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Tag from '../components/tag'
import ContentsPanel from "../components/contents-panel"
import ProjectPreview from "../components/project-preview"

export interface ProjectsProps {
  data: any
  location: any
}

const Projects: FC<ProjectsProps> = ({ data, location }) => {
  const tableOfContents: any = {
    items: [
      {
        url: "#work",
        title: "Work"
      },
      {
        url: "#class",
        title: "Class",
      },
      {
        url: "#personal",
        title: "Personal"
      }
    ]
  }
  return (
    <Layout>
      <Halo title="Projects" url="https://chrisnager.com/projects" />
      <Flex sx={{
          justifyContent: 'space-between',
        }}>
        <Box sx={{ maxWidth: `50ch`, mb: 0, px: 3 }}>
          <Intro title="Projects" description="A handful of things I've built." />
          <Divider sx={{ my: 5 }}/>
          {/* WORK PROJECTS **/}
          <Box as="ul" sx={{ my: 70, pl: 0, display: `grid` }}>
            <Text 
              as="h2" 
              id="work"
              sx={{ 
                fontWeight: 700,
              }}
            >
              Work
            </Text>
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
                <ProjectPreview 
                  name={name} 
                  url={url} 
                  summary={summary} 
                  image={image}
                  tags={tags}
                />
              ),
            )}
          </Box>
          <Divider />
          {/* CLASS PROJECTS **/}
          <Box as="ul" sx={{ my: 70, pl: 0, display: `grid` }}>
            <Text 
              as="h2" 
              id="class" 
              sx={{ 
                fontWeight: 700
              }}
            >
              Class
            </Text>
            {data.allClassProjectsYaml.edges.map(
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
                <ProjectPreview 
                  name={name} 
                  url={url} 
                  summary={summary} 
                  image={image}
                  tags={tags}
                />
              ),
            )}
          </Box>
          <Divider />
          {/* PERSONAL PROJECTS **/}
          <Box as="ul" sx={{ my: 70, pl: 0, display: `grid` }}>
            <Text 
              as="h2" 
              id="personal" 
              sx={{ 
                fontWeight: 700
              }}
            >
              Personal
            </Text>
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
                <ProjectPreview 
                  name={name} 
                  url={url} 
                  summary={summary} 
                  image={image}
                  tags={tags}
                />
              ),
            )}
          </Box>
        </Box>
        <ContentsPanel tableOfContents={tableOfContents} location={location} />
      </Flex>
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
    allClassProjectsYaml {
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
