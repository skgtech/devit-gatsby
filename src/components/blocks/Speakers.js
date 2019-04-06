import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Block from './Block'
import Speaker from './Speaker'
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
  }
`

const SpeakerItem = ({ children }) => (
  <Col sm={6} md={4} css={speakerOuterCss}>
    {children}
  </Col>
)

export default ({ year }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          config {
            isCFPOpen
            moreSpeakersToBeAnnounced
          }
          allSpeaker(sort: { fields: [last_name] }) {
            edges {
              node {
                first_name
                last_name
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
                tagline
                year
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Block>
            <Grid
              css={css`
                text-align: center;
              `}
            >
              <DarkBlockHeading>Meet our speakers</DarkBlockHeading>
              <p className="dark">
                Each year we meticulously vet and select remarkable speakers to
                deliver the best talks on web development.
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
              {data.allSpeaker.edges.map(({ node }) => (
                <SpeakerItem>
                  <Speaker speaker={node} speaker_page={false} />
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
      )}
    />
  )
}
