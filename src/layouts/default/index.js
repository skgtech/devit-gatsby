import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../../components/Footer'
import Meta from '../../components/Meta'

const Default = ({ children }) => {
  return (
    <div>
      <Helmet>
        <Meta />
      </Helmet>
      <div>
        {children()}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

Default.propTypes = {
  children: PropTypes.func,
}

export default Default
