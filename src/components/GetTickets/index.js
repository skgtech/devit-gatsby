import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import GetTickets from './GetTickets'

const GetTicketsContainer = () => {
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
        <GetTickets enabled={data.config.tickets.enabled} url={data.config.tickets.url} />
      )}
    />
  )
}

export default GetTicketsContainer
