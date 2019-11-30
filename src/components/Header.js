import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './Menu/Menu'

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          file(relativePath: { eq: "header/screen.jpg" }) {
            relativePath
            publicURL
          }
        }
      `}
      render={data => (
        <header
          css={css`
            background-image: linear-gradient(rgba(0, 62, 115, 0.9), rgba(0, 62, 115, 0.9)),
              url(${data.file.publicURL});
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
            min-height: 300px;
            height: auto;
            padding-top: 40px;

            @media (max-width: $screen-sm-min) {
              height: auto;
              min-height: auto;
              padding-top: 0;
            }
          `}
        >
          <Menu />
        </header>
      )}
    />
  )
}

export default Header
