import React from 'react'
import PropTypes from 'prop-types'

BlockWBackgroundImage.propTypes = {
  children: PropTypes.func,
  imageSrc: PropTypes.string,
  id: PropTypes.string,
}

const BlockWBackgroundImage = ({ imageSrc, id, children }) => {
  return (
    <div
      id={id}
      css={{
        background: 'white',
        backgroundImage: `linear-gradient(rgba(0, 62, 115, 0.9), rgba(0, 62, 115, 0.9)), url(${imageSrc})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `top`,
        position: `relative`,
        color: `white`,
        paddingTop: `7.11em`,
        paddingBottom: `7.11em`,
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  )
}

export default BlockWBackgroundImage
