import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import HeroContainer from './HeroContainer'
import Menu from '../Menu/Menu'

const Hero = () => {
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
        <HeroContainer
          date={data.config.date}
          menu={<Menu date={data.config.date} tickets={data.config.tickets} />}
        />
      )}
    />
  )
}

export default Hero
