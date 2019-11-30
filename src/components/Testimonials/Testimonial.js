import React from 'react'
import PropTypes from 'prop-types'

import background from '../../images/new/wedge.svg'

const Testimonial = ({ text, name, link }) => {
  return (
    <div
      css={{
        margin: '0',
        padding: '40px',
        height: '100%',
        backgroundImage: background,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: '60%',
      }}
    >
      <div
        css={{
          color: 'white',
          fontSize: '1.66em',
        }}
      >
        <i className="fas fa-quote-left" />
      </div>
      <div
        css={{
          color: 'white',
          fontSize: '1.33em',
          fontWeight: '900',
          lineHeight: '29px',
          marginBottom: '10px',
        }}
      >
        {text}
      </div>
      <a
        href={link}
        css={{
          color: '#FFFFFF',
          '&:hover': {
            color: '#FFFFFF',
          },
          '&:active': {
            color: '#FFFFFF',
          },
        }}
      >
        {name} <i className="fas fa-long-arrow-alt-right" />
      </a>
    </div>
  )
}

Testimonial.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
}

export default Testimonial
