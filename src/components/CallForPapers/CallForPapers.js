import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { Grid, Row, Col } from 'react-flexbox-grid'

import BlockCta from '../BlockCta'
import { LightBlockHeading, DarkBlockHeading } from '../BlockHeading'
import SpeakerSocial from '../SpeakerSocial'
import Tags from '../Tags'

const CallForPapers = ({ speaker }) => {
  const orangeBackground = css`
    color: white;
    background-color: #f5a623;
    background-image: url('/assets/images/new/bullhorn.svg');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
  `

  return (
    <div
      css={css`
        padding-top: 50px;
        background: white;
      `}
    >
      <Grid>
        <Row reverse={true}>
          <Col
            md={4}
            css={css`
              margin-top: 25px;
            `}
          >
            <DarkBlockHeading>Our speakers</DarkBlockHeading>
            <p className="dark">
              Each year we meticulously vet and select remarkable speakers to deliver the best talks
              on web development. We are very proud of the quality of the content that we offered
              over the years and we are happy to share it with you.
            </p>
            <BlockCta to={'/speakers'}>All past speakers</BlockCta>
          </Col>
          <Col
            md={8}
            css={css`
              @media (max-width: $screen-md-min) {
                margin-bottom: 50px;
              }
            `}
          >
            <div
              css={css`
                width: 300px;
                margin: 0 auto;
                text-align: center;
                background: white;
                padding: 30px 30px 0 30px;
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                border-bottom: none;
                box-shadow: 0 -10px 25px 0 rgba(0, 62, 115, 0.1);
              `}
            >
              <Img
                css={css`
                  width: 100%;
                  height: 100%;
                  max-width: 240px;
                  max-height: 240px;
                  border-radius: 50%;
                `}
                fixed={speaker.img.childImageSharp.fixed}
                alt={`${speaker.first_name} ${speaker.last_name}`}
              />
              <div
                css={css`
                  color: #333;
                  font-size: 1.1em;
                  font-weight: 900;
                  line-height: 60px;
                  height: 60px;
                  padding-bottom: 16px;
                `}
              >
                {speaker.first_name}
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
      <div css={orangeBackground}>
        <Grid>
          <Row>
            <Col md={8}>
              <div
                css={css`
                  width: 300px;
                  margin: 0 auto;
                  text-align: center;
                  padding: 0 30px 30px 30px;
                  background: white;
                  color: black;
                  border-bottom-left-radius: 15px;
                  border-bottom-right-radius: 15px;
                  border-top: none;
                  box-shadow: 0 10px 25px 0 rgba(0, 62, 115, 0.1);
                `}
              >
                <div
                  css={css`
                    font-size: 0.77em;
                    line-height: 17px;
                    height: 34px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  {speaker.tagline}
                </div>
                <Tags tags={speaker.tags} />
                <SpeakerSocial items={speaker.social} />
              </div>
            </Col>
            <Col
              md={4}
              css={css`
                padding-top: 56px;
                padding-bottom: 56px;
              `}
            >
              <LightBlockHeading>Interested in speaking?</LightBlockHeading>
              <p className="light">
                Even though we do not have an open call for papers, we are always looking to meet
                gifted speakers. If you are interested in speaking in the next edition of DEVit,
                feel free to fill our form
              </p>
              <a
                href="#"
                css={css`
                  color: white;
                  margin-top: 40px;
                  display: block;
                `}
              >
                Apply to talk
                <i className="fas fa-long-arrow-alt-right" />
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  )
}

CallForPapers.propTypes = {
  speaker: PropTypes.object,
}

export default CallForPapers
