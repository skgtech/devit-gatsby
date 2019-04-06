import React from 'react'
import Organizers from './Organizers'

import { Grid, Row, Col } from 'react-flexbox-grid'

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
