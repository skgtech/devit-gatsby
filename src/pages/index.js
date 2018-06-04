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
  console.log(data);

  return (
    <div>
      <Hero config={data.config} pathname={location.pathname}></Hero>
      <Early config={data.config}/>
      <About/>
      <Testimonials/>
      {/* <Speakers years='2018'/> */}
      <Venues/>
      <Plan />
      <Sponsors config={data.config} sponsors={data.sponsors} />
      {/* <Partners center /> */}
      {/* <Subscribe /> */}
      {/* <Footer /> */}
  </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    config(filter: { id: { eq: "Config"} }) {
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
    allSponsor(filter: { year: { eq: 2018 } }) {
      edges {
        node {
          name
          year
        }
      }
    },
  }
`
