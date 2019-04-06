import React from 'react'

import { Grid, Row, Col } from 'react-flexbox-grid'

import { DarkBlockHeading } from '../BlockHeading'
import BlockCTA from '../BlockCta'

import TicketsLogo from './../../../images/new/tickets.svg'

const GetTicketsContainer = ({ enabled, url }) => {
  return enabled ? (
    <div
      css={{
        backgroundColor: '#f5f8fa',
        paddingTop: '50px',
        paddingBottom: '50px',
        color: '#57585A',
      }}
    >
      <Grid>
        <Row>
          <Col xs="6">
            <img
              css={{
                width: '80%',
              }}
              src={TicketsLogo}
              alt="Early birds tickets"
            />
          </Col>
          <Col xs="6">
            <DarkBlockHeading>Get your tickets now!</DarkBlockHeading>
            <p className="dark">
              Whether it’s Frontend, Backend, DevOps or Mobile that you care
              about, join us to learn about the most modern practices and
              techniques. Secure your ticket now, while there is still
              availability.
            </p>
            <BlockCTA to={url}>Buy tickets</BlockCTA>
          </Col>
        </Row>
      </Grid>
    </div>
  ) : null
}

export default GetTicketsContainer
