import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Block from './Block'
import Speaker from './SpeakerItem'
import SpeakerToBeAnounced from './SpeakerToBeAnounced'
import { DarkBlockHeading } from './BlockHeading'

const speakerOuterCss = css`
  margin-top: 10px;
  margin-bottom: 10px;
  transform: translate3d(0, 0, 0); // (2)
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media (min-width: 992px) {
    filter: grayscale(100%);
    margin-top: -100px; // (3)

    &:hover {
      filter: grayscale(0%);
      transform: translate3d(0, 0, 1px); // (2)
    }

    .speaker {
      background-color: white;
      box-shadow: 0 0 10px 0 rgba(0, 62, 115, 0.1);
      padding: 32px;
    }

    .speaker__hover {
      opacity: 1;
    }
  }
`

const SpeakerItem = ({ children }) => (
  <Col sm={6} md={4} css={speakerOuterCss}>
    {children}
  </Col>
)

SpeakerItem.propTypes = {
  children: PropTypes.string,
}

const Speakers = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          config {
            isCFPOpen
            moreSpeakersToBeAnnounced
          }
          speakers: allSpeaker {
            edges {
              node {
                first_name
                last_name
                tagline
                url
                img {
                  childImageSharp {
                    fixed(width: 280, height: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                tags
                social {
                  twitter
                  homepage
                  medium
                  github
                  linkedin
                }
              }
            }
          }
        }
      `}
      render={data => {
        const speakers = data.speakers.edges.map(({ node }) => node)

        return (
          <>
            <Block>
              <Grid
                css={css`
                  text-align: center;
                `}
              >
                <DarkBlockHeading>Meet our speakers</DarkBlockHeading>
                <p className="dark">
                  Each year we meticulously vet and select remarkable speakers to deliver the best
                  talks on web development.
                </p>
              </Grid>
              <Row
                css={css`
                  margin-top: 40px;
                  transform-style: preserve-3d;

                  @media (min-width: 992px) {
                    padding-top: 100px;
                  }
                `}
              >
                {speakers.map((speaker, index) => (
                  <SpeakerItem key={index}>
                    <Speaker speaker={speaker} speaker_page={false} />
                  </SpeakerItem>
                ))}

                {data.config.moreSpeakersToBeAnnounced && (
                  <SpeakerItem>
                    <SpeakerToBeAnounced />
                  </SpeakerItem>
                )}
              </Row>
            </Block>

            {data.config.isCFPOpen && <SpeakerToBeAnounced />}
          </>
        )
      }}
    />
  )
}

Speakers.propTypes = {
  speakers: PropTypes.array,
}

export default Speakers
