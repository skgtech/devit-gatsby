import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'normalize.css'

import Meta from './Meta';

const Layout = ({ data, children, location, ...args }) => {
  return (
    <div>
      <Helmet>
        <Meta />
      </Helmet>
      <div>
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
