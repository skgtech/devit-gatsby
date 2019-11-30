import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Hero from './Hero'
import Menu from '../Menu/Menu'

const HeroContainer = () => {
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
      render={data => (
        <Hero
          date={data.config.date}
          menu={<Menu date={data.config.date} tickets={data.config.tickets} />}
        />
      )}
    />
  )
}

export default HeroContainer
