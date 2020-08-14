/** @jsx jsx */

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FC } from 'react'
import { Box, jsx } from 'theme-ui'

import Halo from '../components/halo'
import Intro from '../components/intro'
import Layout from '../components/layout'

export interface AboutProps {
  data: {
    file: {
      childImageSharp: { fluid: any }
    }
  }
}

const About: FC<AboutProps> = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <Halo title="About" url="http://drjosephliu.com/about" />
      <Box sx={{ maxWidth: `60ch`, mb: 5, px: 3 }}>
        <Intro
          title="About"
          description="I'm a computer science student at the University of Pennsylvania with a curious mind and a love for learning and building."
        />

        <Img {...{ fluid }} alt="Chris Nager, smiling and wearing a hat" />

        <p sx={{ fontFamily: `Georgia, serif` }}>
          Taiwanese by ethnicity, I grew up in Hong Kong before moving to London, where 
          I studied at Imperial College School of Medicine and practised as a doctor afterwards.
        </p>

        <p sx={{ fontFamily: `Georgia, serif` }}>
          Working in NHS hospitals exposed me to the impact technology can have, because in nearly
          every hospital I worked in, we had very little of it! 

          Everyday I went to work imagining how much easier my life would be with <em>xyz</em> app.

          At the same time, I've always had a penchant for creating things ever
          since I was young. Whether it was playing with lego, cooking or making
          art, I love the satisfying feeling of seeing 
          something built from start to finish. So it was during this time that I decided to try my
          hand at programming.
        </p>

        <p sx={{ fontFamily: `Georgia, serif` }}>
          I wish I could say I instantly fell in love with it, because I didn't. If anything, it was pure frustration. But I stuck with it and it grew on me. After I figured out how to make simple web 
          applications I was soon craving for more. New technologies, new languages; the world of software was opening before me and I was hungry to learn it all.</p>

        <p sx={{ fontFamily: `Georgia, serif` }}>
          It wasn't long before I realised building software was where my heart was truly at. So in 2018, I hung up my stethoscope for good and devoted myself to learning the art of computer science full time.
        </p>

        <p sx={{ fontFamily: `Georgia, serif` }}>
          This website is a way to track my progress. From the early days of FreeCodeCamp to where I'm at now, I will leave nothing unturned. Consider this my sketchbook if you will, to document my journey so far.
        </p>
      </Box>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    file(relativePath: { eq: "images/me.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
