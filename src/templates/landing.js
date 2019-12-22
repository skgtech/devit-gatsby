import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import GetTickets from '../components/GetTickets'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Speakers from '../components/SpeakersList'
import Venues from '../components/Venues'
import CallForPapers from '../components/CallForPapers'
import CallForSponsors from '../components/CallForSponsors'
import Plan from '../components/Plan'
import Sponsors from '../components/Sponsors'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'

const LandingPageTemplate = ({ data }) => {
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
      <Speakers speakers={data.speakers.edges.map(({ node }) => node)} />
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
}

LandingPageTemplate.propTypes = {
  data: PropTypes.object,
}

export default LandingPageTemplate

export const pageQuery = graphql`
  query LandingPageQuery($year: Int!) {
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
    sponsors: allSponsor(filter: { year: { eq: $year } }) {
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
    speakers: allSpeaker(sort: { fields: [last_name] }, filter: { year: { eq: $year } }) {
      edges {
        node {
          first_name
          last_name
          url
          img {
            childImageSharp {
              fixed(width: 280, height: 280) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          tags
          social {
            twitter
            homepage
            medium
            github
            linkedin
          }
          tagline
          year
        }
      }
    }
  }
`
