import React, {Fragment} from 'react';
import Plan from './Plan';
import GatsbyImage from 'gatsby-image';

import { DarkBlockHeading } from './BlockHeading';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Venue = ({name, venueFor, desc, lat, long, sizes, switchOrder}) => {
  return (
    <div className="venue">
      <div css={{
        fontSize: '1.33em',
        fontWeight: 'bold',
        margin: '72px 0 16px'
      }}>
        {name}
      </div>
      <div css={{
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
      }}>
        {venueFor}
      </div>
      <div css={{
        marginBottom: '72px',
        '@media (min-width: $screen-sm-max)': {
          width: '50%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }
      }}>
        {desc}
      </div>
      <Row>
        <Col xs={4}>
          <div css={{
            paddingLeft: 0,
            paddingRight: 0
          }}>
            <div css={{
              height: '420px',
            }} data-long={long} data-lat={lat}></div>
          </div>
        </Col>
        <Col xs={8}>
          <GatsbyImage css={{
            paddingLeft: 0,
            paddingRight: 0,
            height: '420px'
          }} sizes={sizes}/>
        </Col>
      </Row>
    </div>
  )
};

const Venues = ({imageSrcs}) => {
  return (
    <div id="venue" css={{
      background: 'white',
      paddingBottom: 0,
      textAlign: 'center'
    }}>
      <DarkBlockHeading>The Venues</DarkBlockHeading>
      <Venue
        switchOrder={true}
        name="City College, Sunday Jun 10"
        venueFor="Workshops"
        desc="Sunday, 10th of June will be a day dedicated to workshops, with at least 11 sessions of various topics to choose from. It will be hosted at City College Thessaloniki, which offers multiple academic classrooms, an ideal space for the purpose of delivering a hands-on session."
        lat="22.9370313"
        long="40.6373756"
        sizes={imageSrcs.cityCollege}/>
      <Venue
        name="Royal Theatre, Monday Jun 11"
        venueFor="Talks"
        desc="Monday, 11th of June will be a day dedicated to presentations, with a single track of 8 speakers. It will be hosted at the iconic Royal Theater of Thessaloniki, a spacious theatrical venue with a capacity of 683 people located at the heart of Thessaloniki, right next to the historic White Tower by the seaside."
        lat="22.9495758"
        long="40.6252233"
        sizes={imageSrcs.royalTheatre}/>
    </div>
  );
};

export default Venues;
