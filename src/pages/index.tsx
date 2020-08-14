/** @jsx jsx */

import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { FC } from 'react'
import { Box, Flex, Text, jsx } from 'theme-ui'

import Halo from '../components/halo'
import Hero from '../components/hero'
import Layout from '../components/layout'

export interface HomeProps {
  data: any
}

const Home: FC<HomeProps> = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Halo />
      <Flex sx={{ 
          maxWidth: `75ch`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={`Joseph Liu`}
          sx={{
            mr: 2,
            mb: 0,
            width: '500px',
            height: '50%'
          }}
        />
          <Hero data={data.allDataYaml.edges[0].node} />
      </Flex>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    allDataYaml {
      edges {
        node {
          description
        }
      }
    }

    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
