import React from 'react'
import PropTypes from 'prop-types'

const LightLeading = ({ css, children }) => {
  return (
    <p
      css={{
        color: 'white',
        fontSize: '1.33em',
        fontFamily: 'Lato',
        lineHeight: '29px',
        marginTop: '8px',
        ...css,
      }}
    >
      {children}
    </p>
  )
}

const DarkLeading = ({ css, children }) => {
  return (
    <p
      css={{
        fontSize: '1.33em',
        fontFamily: 'Lato',
        lineHeight: '29px',
        marginTop: '8px',
        fontWeight: 'bold',
        color: '#57585A',
        ...css,
      }}
    >
      {children}
    </p>
  )
}

LightLeading.propTypes = {
  children: PropTypes.string,
  css: PropTypes.object,
}

DarkLeading.propTypes = {
  children: PropTypes.string,
  css: PropTypes.object,
}

export { LightLeading, DarkLeading }
