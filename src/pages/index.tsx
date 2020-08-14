/** @jsx jsx */

import { graphql } from 'gatsby'
import { FC } from 'react'
import { Box, jsx } from 'theme-ui'

import Halo from '../components/halo'
import Hero from '../components/hero'
import Layout from '../components/layout'

export interface HomeProps {
  data: any
}

const Home: FC<HomeProps> = ({ data }) => {
  return (
    <Layout>
      <Halo />
      <Box sx={{ maxWidth: `55ch` }}>
        <Hero data={data.allDataYaml.edges[0].node} />
      </Box>
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
  }
`
