import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { graphql } from 'gatsby'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { DarkBlockHeading } from '../components/BlockHeading'
import Header from '../components/Header'
import Tags from '../components/tags'
import GetTickets from '../components/GetTickets'
import Speaker from '../components/SpeakerItem'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const SpeakerTemplate = ({ data }) => {
  const speaker = data.speaker.edges[0].node
  const talks = speaker.talk

  return (
    <Layout>
      <Header />
      <div>
        <div
          css={css`
            background-color: #f5f8fa;
            padding-top: 70px;
            padding-bottom: 70px;
          `}
        >
          <Grid>
            <Row>
              <Col sm={4}>
                <Speaker speaker={speaker} speaker_page={true} />
              </Col>
              <Col
                css={css`
                  @media (min-width: $screen-sm-max) {
                    padding-left: 50px;
                  }

                  @media (max-width: $screen-sm-min) {
                    margin-top: 35px;
                  }
                `}
                sm={8}
              >
                <DarkBlockHeading>
                  {speaker.first_name} {speaker.last_name}
                </DarkBlockHeading>
                <div
                  css={css`
                    font-size: 1.33em;
                    font-weight: bold;
                    color: #57585a;
                  `}
                >
                  {speaker.tagline}
                </div>
                <div
                  css={css`
                    color: #57585a;
                  `}
                >
                  {speaker.bio}
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className="talks">
          <div
            css={css`
              border: none;

              li > a {
                font-weight: bold;
                font-size: 1em;
              }

              li:not(.active) > a {
                color: #57585a;
              }
            `}
          >
            <div className="container">
              <Tabs>
                <TabList>
                  {talks.map((talk, index) => (
                    <Tab key={index}>
                      {talk.year} {talk.type}
                    </Tab>
                  ))}
                </TabList>

                {talks.map((talk, index) => (
                  <TabPanel key={index}>
                    <div className="container">
                      <div className="talk">
                        <DarkBlockHeading>{talk.title}</DarkBlockHeading>
                        <div className="talk__description">
                          {talk.description}
                          <Tags tags={talk.tags} />
                        </div>
                        {talk.youtube_url && (
                          <div
                            css={css`
                              margin-top: 60px;
                            `}
                          >
                            <iframe
                              width="100%"
                              height="531"
                              src={`https://www.youtube.com/embed/${talk.youtube_url}?rel=0&amp;showinfo=0`}
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}
                      </div>
                      <hr />
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <GetTickets />
      <Footer />
    </Layout>
  )
}

SpeakerTemplate.propTypes = {
  data: PropTypes.object,
}

export default SpeakerTemplate

export const pageQuery = graphql`
  query SpeakerQuery($url: String!) {
    speaker: allSpeaker(filter: { url: { eq: $url } }) {
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
          bio
          year
          talk {
            title
            type
            description
            tags
            year
          }
        }
      }
    }
  }
`
