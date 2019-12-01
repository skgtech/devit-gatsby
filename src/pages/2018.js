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
  const images = {
    file342x1: data['file342x1'].childImageSharp.sizes,
    file342x2: data['file342x2'].childImageSharp.sizes,
    file342x3: data['file342x3'].childImageSharp.sizes,
    file342x4: data['file342x4'].childImageSharp.sizes,
    file683x1: data['file683x1'].childImageSharp.sizes,
    file683x2: data['file683x2'].childImageSharp.sizes,
  }

  return (
    <Layout>
      <Hero />
      <Speakers speakers={data.speakers.edges.map(({ node }) => node)} />
      <PhotoAlbum images={images} />
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
  query {
    file342x1: file(relativePath: { eq: "albums/2018/ph-342x342-1.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 342) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    file342x2: file(relativePath: { eq: "albums/2018/ph-342x342-2.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 342) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    file342x3: file(relativePath: { eq: "albums/2018/ph-342x342-3.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 342) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    file342x4: file(relativePath: { eq: "albums/2018/ph-342x342-4.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 342) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    file683x1: file(relativePath: { eq: "albums/2018/ph-683x342-1.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 683) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    file683x2: file(relativePath: { eq: "albums/2018/ph-683x342-2.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 683) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    speakers: allSpeaker(sort: { fields: [last_name] }, filter: { year: { eq: 2018 } }) {
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
