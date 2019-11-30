import React from 'react'
import PropTypes from 'prop-types'

Block.propTypes = {
  children: PropTypes.func,
  id: PropTypes.string,
  style: PropTypes.object,
}

const Block = ({ style, id, children }) => {
  return (
    <div
      id={id}
      css={{
        paddingTop: '5.5em',
        paddingBottom: '5.5em',
        background: 'white',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Block
