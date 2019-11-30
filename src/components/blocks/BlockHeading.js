import React from 'react'
import PropTypes from 'prop-types'

LightBlockHeading.propTypes = {
  children: PropTypes.func,
}

DarkBlockHeading.propTypes = {
  children: PropTypes.func,
}

const LightBlockHeading = ({ children }) => {
  return (
    <h1
      css={{
        marginTop: '0',
        marginBottom: '8px',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      {children}
    </h1>
  )
}

const DarkBlockHeading = ({ children }) => {
  return (
    <h1
      css={{
        marginTop: '0',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#57585A',
      }}
    >
      {children}
    </h1>
  )
}

export { LightBlockHeading, DarkBlockHeading }
