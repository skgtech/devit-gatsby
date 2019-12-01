import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import PhotoAlbum from '../components/PhotoAlbum'
import Speakers from '../components/Speakers'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'

const PreviousPageTemplate = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Speakers speakers={data.speakers.edges.map(({ node }) => node)} />
      <PhotoAlbum images={data.allAlbumPhoto.edges.map(({ node }) => node)} />
      <Subscribe />
      <Footer />
    </Layout>
  )
}

PreviousPageTemplate.propTypes = {
  data: PropTypes.object,
}

export default PreviousPageTemplate

export const pageQuery = graphql`
  query($year: Int!) {
    allAlbumPhoto(filter: { year: { eq: $year } }) {
      edges {
        node {
          size
          img {
            childImageSharp {
              sizes(maxWidth: 342) {
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
