import React from 'react'
import PropTypes from 'prop-types'

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

LightBlockHeading.propTypes = {
  children: PropTypes.string,
}

DarkBlockHeading.propTypes = {
  children: PropTypes.string,
}

export { LightBlockHeading, DarkBlockHeading }
