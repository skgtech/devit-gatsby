import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Row, Col } from 'react-flexbox-grid'
import GatsbyImage from 'gatsby-image'

import { DarkBlockHeading } from '../BlockHeading'
import Block from '../Block'

const Heading = ({ children }) => {
  return (
    <h1
      css={{
        marginTop: '0',
        marginBottom: '8px',
        color: 'white',
        fontSize: '2em',
        fontWeight: 'bold',
        lineHeight: '44px',
      }}
    >
      {children}
    </h1>
  )
}

Heading.propTypes = {
  children: PropTypes.func,
}

const AlbumOneItem = ({ children }) => (
  <Col
    sm={6}
    md={3}
    css={css`
      padding-left: 0;
      padding-right: 0;
    `}
  >
    {children}
  </Col>
)

AlbumOneItem.propTypes = {
  children: PropTypes.func,
}

const AlbumTwoItem = ({ children }) => (
  <Col
    md={6}
    css={css`
      padding-left: 0;
      padding-right: 0;
    `}
  >
    {children}
  </Col>
)

AlbumTwoItem.propTypes = {
  children: PropTypes.func,
}

const PhotoAlbum = ({ images }) => {
  console.log(images)
  const singleImages = images.filter(i => i.size === 'single')
  const doubleImages = images.filter(i => i.size === 'double')

  return (
    <div
      css={css`
        background: white;
      `}
    >
      <Block>
        <DarkBlockHeading>The photo album</DarkBlockHeading>
        <p className="dark">
          We have released the photos of the last DEVit. We have released the photos of the last
          DEVit. We have released the photos of the last DEVit.
        </p>
      </Block>
      <Row
        css={css`
          background-color: #00629e;
          margin: 0;
        `}
      >
        <AlbumOneItem>
          <GatsbyImage sizes={singleImages[0].img.childImageSharp.sizes} />
        </AlbumOneItem>
        <AlbumOneItem>
          <GatsbyImage sizes={singleImages[1].img.childImageSharp.sizes} />
        </AlbumOneItem>
        <AlbumTwoItem>
          <div
            css={css`
              position: relative;
            `}
          >
            <div
              css={css`
                padding: 40px 40px 0 40px;
                color: #ffffff;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0, 62, 115, 0.9);
              `}
            >
              <Heading>Tag you very much</Heading>
              <div
                css={css`
                  opacity: 0.7;
                  font-size: 1.05em;
                  line-height: 23px;

                  @media (min-width: $screen-lg-min) {
                    max-width: 400px;
                  }
                `}
              >
                Spot your face and tag your friends Spot your face and tag your friends Spot your.
              </div>
              <button
                css={css`
                  border-radius: 40px;
                  background-color: #ffffff;
                  color: #003e73;
                `}
              >
                Go
              </button>
            </div>
            {/* <GatsbyImage sizes={doubleImages[0].img.childImageSharp.sizes} /> */}
          </div>
        </AlbumTwoItem>
      </Row>
      <Row
        css={css`
          background-color: #00629e;
          margin: 0;
        `}
      >
        <AlbumOneItem>
          <GatsbyImage sizes={singleImages[2].img.childImageSharp.sizes} />
        </AlbumOneItem>
        <AlbumTwoItem>
          <GatsbyImage sizes={doubleImages[1].img.childImageSharp.sizes} />
        </AlbumTwoItem>
        <AlbumOneItem>
          <GatsbyImage sizes={singleImages[3].img.childImageSharp.sizes} />
        </AlbumOneItem>
      </Row>
    </div>
  )
}

PhotoAlbum.propTypes = {
  images: PropTypes.object,
}

export default PhotoAlbum
