import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import GetTicketsContainer from './GetTicketsContainer'

const GetTickets = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          config(id: { eq: "Config" }) {
            tickets {
              enabled
              url
            }
          }
        }
      `}
      render={data => (
        <GetTicketsContainer
          enabled={data.config.tickets.enabled}
          url={data.config.tickets.url}
        />
      )}
    />
  )
}

export default GetTickets
