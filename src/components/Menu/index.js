import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './Menu'

const MenuContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          config(id: { eq: "Config" }) {
            date
            tickets {
              enabled
              url
            }
          }
        }
      `}
      render={data => <Menu date={data.config.date} tickets={data.config.tickets} />}
    />
  )
}

export default MenuContainer
