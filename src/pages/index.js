import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Hero from '../components/Hero'
import GetTickets from '../components/GetTickets'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Speakers from '../components/Speakers'
import Venues from '../components/Venues'
import CallForPapers from '../components/CallForPapers'
import CallForSponsors from '../components/CallForSponsors'
import Plan from '../components/Plan'
import Sponsors from '../components/Sponsors'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
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
            <Speakers year={2018} />
            <CallForPapers />
            <CallForSponsors />
            <Venues
              imageSrcs={{
                cityCollege: data.cityCollegeImage.childImageSharp.sizes,
                royalTheatre: data.royalTheatreImage.childImageSharp.sizes,
              }}
            />
            <Plan sizes={data.thessalonikiImage.childImageSharp.sizes} />
            <Sponsors sponsors={data.sponsors.edges.map(node => node.node)} />
            <Partners />
            <Subscribe />
            <Footer />
          </Layout>
        )
      }}
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
    rhitaTestimonialsImage: file(relativePath: { eq: "new/rita-jason-683x342.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 683) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    leonieTestimonialsImage: file(relativePath: { eq: "new/leonie-683x342.jpg" }) {
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
    sponsors: allSponsor(filter: { year: { eq: 2018 } }) {
      edges {
        node {
          name
          url
          override_height
          type
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
