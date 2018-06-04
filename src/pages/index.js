import React, {Fragment} from 'react'
import Link from 'gatsby-link'

import Hero from '../components/blocks/Hero'
import Early from '../components/blocks/Early'
import About from '../components/blocks/About'
import Testimonials from '../components/blocks/Testimonials'
// import Speakers from '../components/blocks/Speakers'
import Venues from '../components/blocks/Venues'
import Plan from '../components/blocks/Plan'
import Sponsors from '../components/blocks/Sponsors'
import Partners from '../components/blocks/Partners'
import Subscribe from '../components/blocks/Subscribe'
import Footer from '../components/blocks/Footer'

const IndexPage = ({data, location}) => {

  return (
    <div>
      <Hero config={data.config} pathname={location.pathname}></Hero>
      <Early config={data.config}/>
      <About imageSrc={data.aboutImage.childImageSharp.sizes.src}/>
      <Testimonials/>
      {/* <Speakers years='2018'/> */}
      <Venues/>
      <Plan />
      <Sponsors sponsors={data.sponsors.edges.map(node => node.node)} />
      {/* <Partners center /> */}
      {/* <Subscribe /> */}
      {/* <Footer /> */}
  </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    aboutImage: file(relativePath: { eq: "new/team.jpg" }) {
      childImageSharp {
        sizes {
          src
        }
      }
    }
    config(id: { eq: "Config"}) {
      date,
      tickets {
        enabled
        url
      },
      sponsors {
        cfs
        link_to_sponsorship
      }
    },
    sponsors: allSponsor(filter: { year: { eq: 2018 } }) {
      edges {
        node {
          name
          year
        }
      }
    },
  }
`
