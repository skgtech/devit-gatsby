import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Meta from '../../components/Meta'

const Default = ({ children, data }) => {
  return (
    <div>
      <Helmet>
          <Meta />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
      >
        {children}
        <Footer />
      </div>
    </div>
  )
}

Default.propTypes = {
  children: PropTypes.func,
}

export default Default
