import PropTypes from 'prop-types'
import React from 'react'
import GatsbyImage from 'gatsby-image'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Row, Col } from 'react-flexbox-grid'

import { DarkBlockHeading } from './BlockHeading'

const Map = withScriptjs(
  withGoogleMap(({ lat, long }) => (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: parseFloat(lat), lng: parseFloat(long) }}>
      <Marker position={{ lat: parseFloat(lat), lng: parseFloat(long) }} />
    </GoogleMap>
  ))
)

Venue.propTypes = {
  name: PropTypes.string,
  venueFor: PropTypes.string,
  desc: PropTypes.string,
  lat: PropTypes.number,
  long: PropTypes.number,
  sizes: PropTypes.object,
  switchOrder: PropTypes.bool,
}

const Venue = ({ name, venueFor, desc, lat, long, sizes, switchOrder }) => {
  return (
    <div className="venue">
      <div
        css={{
          fontSize: '1.33em',
          fontWeight: 'bold',
          margin: '72px 0 16px',
        }}
      >
        {name}
      </div>
      <div
        css={{
          borderRadius: '24px',
          backgroundColor: '#e7e7e8',
          fontSize: '0.55em',
          fontWeight: 'bold',
          color: '#57585a',
          textTransform: 'uppercase',
          display: 'inline-block',
          padding: '8px',
          marginTop: '8px',
          marginBottom: '16px',
        }}
      >
        {venueFor}
      </div>
      <div
        css={{
          marginBottom: '72px',
          '@media (min-width: $screen-sm-max)': {
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        }}
      >
        {desc}
      </div>
      <Row reverse={switchOrder}>
        <Col xs={4}>
          <div
            css={{
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <div
              css={{
                height: '420px',
              }}
            >
              <Map
                lat={lat}
                long={long}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </Col>
        <Col xs={8}>
          <GatsbyImage
            css={{
              paddingLeft: 0,
              paddingRight: 0,
              height: '420px',
            }}
            sizes={sizes}
          />
        </Col>
      </Row>
    </div>
  )
}

Venues.propTypes = {
  imageSrcs: PropTypes.object,
}

const Venues = ({ imageSrcs }) => {
  return (
    <div
      id="venue"
      css={{
        background: 'white',
        paddingBottom: 0,
        textAlign: 'center',
      }}
    >
      <DarkBlockHeading>The Venues</DarkBlockHeading>
      <Venue
        switchOrder={true}
        name="City College, Sunday Jun 10"
        venueFor="Workshops"
        desc="Sunday, 10th of June will be a day dedicated to workshops, with at least 11 sessions of various topics to choose from. It will be hosted at City College Thessaloniki, which offers multiple academic classrooms, an ideal space for the purpose of delivering a hands-on session."
        long="22.9370313"
        lat="40.6373756"
        sizes={imageSrcs.cityCollege}
      />
      <Venue
        name="Royal Theatre, Monday Jun 11"
        venueFor="Talks"
        desc="Monday, 11th of June will be a day dedicated to presentations, with a single track of 8 speakers. It will be hosted at the iconic Royal Theater of Thessaloniki, a spacious theatrical venue with a capacity of 683 people located at the heart of Thessaloniki, right next to the historic White Tower by the seaside."
        long="22.9495758"
        lat="40.6252233"
        sizes={imageSrcs.royalTheatre}
      />
    </div>
  )
}

export default Venues
