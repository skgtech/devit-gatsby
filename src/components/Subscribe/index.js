import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Subscribe from './Subscribe'

const SubscribeContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          subscribeImage: file(relativePath: { eq: "new/subscribe.jpg" }) {
            childImageSharp {
              sizes {
                src
              }
            }
          }
        }
      `}
      render={data => <Subscribe imageSrc={data.subscribeImage.childImageSharp.sizes.src} />}
    />
  )
}

export default SubscribeContainer
