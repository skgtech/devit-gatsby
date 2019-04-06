import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import AboutContainer from './AboutContainer'

const About = ({ imageSrc }) => {
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
      render={data => (
        <AboutContainer imageSrc={data.aboutImage.childImageSharp.sizes.src} />
      )}
    />
  )
}

export default About
