import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Testimonial = ({children, text, name, link}) => {
  return (
    <div css={{
      padding: '40px',
      height: '100%',
      backgroundImage: `url('/assets/images/new/wedge.svg')`,
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

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Row>
        <Col xs="3">
          <Testimonial
            text="It’s wonderful, lots of great people, great conversations and some really excellent talks!"
            name="Leonie Watson 2017"
            link="/speakers/leonie_watson"/>
        </Col>
        <Col xs="6">
          <img css={{
            width: '100%',
          }} src="/assets/images/new/rita-jason-683x342.jpg" alt="Speaker 1" />
        </Col>
        <Col xs="3">
          <Testimonial
            text="There is mobile, there is front end, there is DevOps, databases. Very nice combination of everything."
            name="Rita Zhang 2017"
            link="/speakers/rita_zhang"/>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <img css={{
            width: '100%',
          }} src="/assets/images/new/leonie-683x342.jpg" alt="Speaker 2" />
        </Col>
        <Col xs="3">
        <Testimonial
            text="It’s fantastic as every year, it’s great!"
            name="Hugo Giraudel 2017"
            link="/speakers/hugo_giraudel"/>
        </Col>
        <Col xs="3">
          <img css={{
            width: '100%'
          }} src="/assets/images/new/hugo-342x342.jpg" alt="Speaker 1" />
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
