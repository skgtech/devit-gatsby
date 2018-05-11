import React from 'react'
import PropTypes from 'prop-types'

import DefaultLayout from './default/index'

const Layout = ({ data, children, location, ...args }) => {
    return <DefaultLayout data={data}>{children}</DefaultLayout>;
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
