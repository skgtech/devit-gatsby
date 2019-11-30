import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import CallForSponsors from './CallForSponsors'

const CallForSponsorsContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSponsor(filter: { featured: { eq: true } }) {
            edges {
              node {
                name
                url
                override_height
                img {
                  childImageSharp {
                    fixed(width: 280, height: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                  extension
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => <CallForSponsors sponsors={data.allSponsor} />}
    />
  )
}

export default CallForSponsorsContainer
