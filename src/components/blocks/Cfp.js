import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Grid, Col } from 'react-flexbox-grid'

import { DarkBlockHeading } from './BlockHeading'
import SpeakerSocial from './SpeakerSocial'
import Tags from './Tags'

const Cfp = () => {
  const orangeBackground = css`
    color: white;
    background-color: #f5a623;
    background-image: url('/assets/images/new/bullhorn.svg');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
  `

  return (
    <StaticQuery
      query={graphql`
        query {
          speaker(id: { eq: "tim_perry" }) {
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
      `}
      render={data => (
        <div
          css={css`
            padding-top: 50px;
            background: white;
          `}
        >
          <Grid>
            <Col
              md={8}
              mdOffset={8}
              css={css`
                margin-top: 25px;
              `}
            >
              <DarkBlockHeading>Our speakers</DarkBlockHeading>
              <p className="dark">
                Each year we meticulously vet and select remarkable speakers to deliver the best
                talks on web development. We are very proud of the quality of the content that we
                offered over the years and we are happy to share it with you.
              </p>
              <a href="#" className="block__cta">
                All past speakers
              </a>
            </Col>
            <Col
              md={4}
              hidden={'sm'}
              css={css`
                @media (max-width: $screen-md-min) {
                  margin-bottom: 50px;
                }
              `}
            >
              <div
                css={css`
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
                  fixed={data.speaker.img.childImageSharp.fixed}
                  alt={`${data.speaker.first_name} ${data.speaker.last_name}`}
                />
                <div className="speaker__name">{data.speaker.first_name}</div>
              </div>
            </Col>
          </Grid>
          <Grid css={orangeBackground}>
            <Col
              md={4}
              hidden={'sm'}
              css={css`
                padding-left: 100px;

                @media (max-width: $screen-md-min) {
                  padding-left: 10px;
                }
              `}
            >
              <div
                css={css`
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
                  {data.speaker.tagline}
                </div>
                <Tags tags={data.speaker.tags} />
                <SpeakerSocial items={data.speaker.social} />
              </div>
            </Col>
            <Col
              md={8}
              css={css`
                padding-top: 56px;
                padding-bottom: 56px;
                padding-left: 100px;

                @media (max-width: $screen-md-min) {
                  padding-left: 10px;
                }
              `}
            >
              <div className="block__heading">Interested in speaking?</div>
              <p className="light">
                Even though we do not have an open call for papers, we are always looking to meet
                gifted speakers. If you are interested in speaking in the next edition of DEVit,
                feel free to fill our form
              </p>
              <a href="#" className="block__more-cta">
                Apply to talk
                <i className="fas fa-long-arrow-alt-right" />
              </a>
            </Col>
          </Grid>
        </div>
      )}
    />
  )
}

export default Cfp
