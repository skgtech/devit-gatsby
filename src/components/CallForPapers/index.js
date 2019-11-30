import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import CallForPapers from './CallForPapers'

const CallForPapersContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          speaker(url: { eq: "tim_perry" }) {
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
      `}
      render={data => <CallForPapers speaker={data.speaker} />}
    />
  )
}

export default CallForPapersContainer
