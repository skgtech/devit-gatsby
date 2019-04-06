import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'

import Hero from '../components/blocks/Hero/Hero'
import GetTickets from '../components/blocks/GetTickets/GetTickets'
import About from '../components/blocks/About/About'
import Testimonials from '../components/blocks/Testimonials'
import Speakers from '../components/blocks/Speakers'
import Venues from '../components/blocks/Venues'
import CFP from '../components/blocks/Cfp'
import CFS from '../components/blocks/Cfs'
import Plan from '../components/blocks/Plan'
import Sponsors from '../components/blocks/Sponsors'
import Partners from '../components/blocks/Partners'
import Subscribe from '../components/blocks/Subscribe'
import Footer from '../components/blocks/Footer'
import Layout from '../components/Layout'

const IndexPage = ({ data, location }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <Hero />
          <GetTickets />
          <About />
          <Testimonials
            imageSrcs={{
              hugo: data.hugoTestimonialsImage.childImageSharp.sizes,
              rhita: data.rhitaTestimonialsImage.childImageSharp.sizes,
              leonie: data.leonieTestimonialsImage.childImageSharp.sizes,
            }}
          />
          <Speakers years="2018" />
          <CFP />
          <CFS />
          <Venues
            imageSrcs={{
              cityCollege: data.cityCollegeImage.childImageSharp.sizes,
              royalTheatre: data.royalTheatreImage.childImageSharp.sizes,
            }}
          />
          <Plan sizes={data.thessalonikiImage.childImageSharp.sizes} />
          <Sponsors sponsors={data.sponsors.edges.map(node => node.node)} />
          <Partners />
          {/* <Subscribe imageSrc={data.subscribeImage.childImageSharp.sizes} /> */}
          <Footer />
        </Layout>
      )}
    />
  )
}

export default IndexPage

export const query = graphql`
  query {
    hugoTestimonialsImage: file(relativePath: { eq: "new/hugo-342x342.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 342) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    rhitaTestimonialsImage: file(
      relativePath: { eq: "new/rita-jason-683x342.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 683) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    leonieTestimonialsImage: file(
      relativePath: { eq: "new/leonie-683x342.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 683) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    cityCollegeImage: file(relativePath: { eq: "venues/citycollege.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    royalTheatreImage: file(relativePath: { eq: "venues/royal_theatre.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    thessalonikiImage: file(relativePath: { eq: "new/thessaloniki.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    subscribeImage: file(relativePath: { eq: "new/subscribe.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    sponsors: allSponsor {
      edges {
        node {
          name
          url
          override_height
          img {
            publicURL
            childImageSharp {
              sizes(maxWidth: 500) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
