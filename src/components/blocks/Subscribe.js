import React from 'react'
import GatsbyImage from 'gatsby-image'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Block from './Block'
import { LightBlockHeading } from './BlockHeading'
import { LightLeading } from './Leading'

const Subscribe = ({ imageSrc }) => {
  return (
    <Block
      style={{
        textAlign: 'center',
        position: 'relative',
        color: 'white',
        paddingTop: '128px',
        paddingBottom: '128px',
      }}
    >
      <GatsbyImage
        sizes={imageSrc}
        style={{ position: 'absolute' }}
        css={{
          top: '0',
          left: '0',
          width: '100%',
          zIndex: '10',
        }}
      />
      <Grid
        css={{
          zIndex: '20',
        }}
      >
        <LightBlockHeading>Stay informed</LightBlockHeading>
        <LightLeading>
          Register for our newsletter and stay informed about our latest news.
        </LightLeading>
        <p>
          Special Offers are available exclusively to our newsletter
          subscribers.
        </p>

        <form className="subscribe-form" action="#" method="get">
          <input type="hidden" value="signup" name="SOURCE" />
          <input
            type="hidden"
            value=""
            name="REF_SOURCE"
            className="js-signup-ref-source"
          />
          <input
            name="FNAME"
            type="text"
            className="subscribe-name-field"
            placeholder="First name"
          />
          <div className="input-group">
            <input
              name="EMAIL"
              type="email"
              className="subscribe-email-field"
              placeholder="Email"
            />
            <span className="input-group-btn">
              <button className="subscribe-submit" type="submit">
                Submit <i className="fas fa-long-arrow-alt-right" />
              </button>
            </span>
          </div>
          <p className="subscribe-result hidden" />
        </form>
      </Grid>
    </Block>
  )
}

export default Subscribe
