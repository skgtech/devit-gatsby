import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import About from './About'

const AboutContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          aboutImage: file(relativePath: { eq: "new/team.jpg" }) {
            childImageSharp {
              sizes {
                src
              }
            }
          }
        }
      `}
      render={data => <About imageSrc={data.aboutImage.childImageSharp.sizes.src} />}
    />
  )
}

export default AboutContainer
