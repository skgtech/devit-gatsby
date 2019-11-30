import React from 'react'
import PropTypes from 'prop-types'

LightLeading.propTypes = {
  children: PropTypes.func,
  css: PropTypes.object,
}

DarkLeading.propTypes = {
  children: PropTypes.func,
  css: PropTypes.object,
}

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

export { LightLeading, DarkLeading }
