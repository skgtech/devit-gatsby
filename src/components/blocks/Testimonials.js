import React from 'react';
import GatsbyImage from 'gatsby-image';

import { Grid, Row, Col } from 'react-flexbox-grid';

import background from '../../images/new/wedge.svg'

const Testimonial = ({children, text, name, link}) => {
  return (
    <div css={{
      padding: '40px',
      height: '100%',
      backgroundImage: background,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
      backgroundSize: '60%'
    }}>
      <div css={{
        color: 'white',
        fontSize: '1.66em',
      }}>
        <i className="fas fa-quote-left"></i>
      </div>
      <div css={{
        color: 'white',
        fontSize: '1.33em',
        fontWeight: '900',
        lineHeight: '29px',
        marginBottom: '10px',
      }}>
        {text}
      </div>
      <a href={link} css={{
        color: '#FFFFFF',
        '&:hover': {
          color: '#FFFFFF',
        },
        '&:active': {
          color: '#FFFFFF',
        }
      }}>
        {name} <i className="fas fa-long-arrow-alt-right"></i>
      </a>
    </div>
  )
}

const Testimonials = ({imageSrcs}) => {
  return (
    <div className="testimonials">
      <Row css={{
        backgroundColor: '#00629E',
        margin: 0,
      }}>
        <Col xs={3}>
          <Testimonial
            text="It’s wonderful, lots of great people, great conversations and some really excellent talks!"
            name="Leonie Watson 2017"
            link="/speakers/leonie_watson"/>
        </Col>
        <Col xs={6}>
          <GatsbyImage sizes={imageSrcs.rhita}/>
        </Col>
        <Col xs={3}>
          <Testimonial
            text="There is mobile, there is front end, there is DevOps, databases. Very nice combination of everything."
            name="Rita Zhang 2017"
            link="/speakers/rita_zhang"/>
        </Col>
      </Row>
      <Row css={{
        backgroundColor: '#00629E',
        margin: 0,
      }}>
        <Col xs={6}>
          <GatsbyImage sizes={imageSrcs.leonie}/>
        </Col>
        <Col xs={3}>
        <Testimonial
          text="It’s fantastic as every year, it’s great!"
          name="Hugo Giraudel 2017"
          link="/speakers/hugo_giraudel"/>
        </Col>
        <Col xs={3}>
          <GatsbyImage sizes={imageSrcs.hugo}/>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
