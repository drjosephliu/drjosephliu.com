/** @jsx jsx */

import { graphql, Link } from 'gatsby'
import { FC } from 'react'
import { Box, Divider, Text, jsx } from 'theme-ui'

import Intro from '../components/intro'
import Halo from '../components/halo'
import Layout from '../components/layout'
import TimeToRead from '../components/time-to-read'

export interface HomeProps {
  data: any
}

const Home: FC<HomeProps> = ({ data }) => {
  const recentPosts = data.allMdx.edges
  return (
    <Layout>
      <Halo />
        <Box sx={{ maxWidth: `55ch` }}>
          <Intro 
            title="Hi I'm Joe."
            description="I'm a doctor turned programmer interested in all kinds 
            of technology. I write about my learning experiences as
            I transition from the world of medicine to the world of software."
          />
          <Link to="/about" sx={{ fontSize: 3 }}>
            Read more about me
          </Link>
          <Divider sx={{ my: 5, color: 'divider' }}/>
        <Text 
          as="h3"
          sx={{
            fontWeight: 800
          }}
        >
          Recent Posts
        </Text>
        <Box 
          as="ul"
          sx={{
            listStyleType: 'none',
            pl: 0,
            mt: 4
          }}
        >
          {recentPosts.map(({ node }: any) => {
            return (
              <Box as="li" key={node.slug} sx={{ mb: 4 }}>
                <Link to={`/${node.slug}`}>
                  <Text as="h4" sx={{ fontWeight: 700 }}>{node.frontmatter.title}</Text>
                </Link>
                <Text 
                  as="p" 
                  sx={{ 
                    m: `10px 0px`, 
                    fontSize: 2, 
                    fontFamily: 'Georgia, serif', 
                    color: `text`, 
                    'a:hover > &': { color: `text` } 
                  }}
                >
                  {node.frontmatter.date} • <TimeToRead mins={node.timeToRead} />
                </Text> 
                <Text as="p">
                  {node.frontmatter.description}
                </Text>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    allMdx(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          timeToRead
          slug
        }
      }
    }
  }
`
