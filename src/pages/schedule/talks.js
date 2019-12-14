import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import Layout from '../../components/Layout'
import ScheduleHeader from '../../components/ScheduleHeader'
import Block from '../../components/Block'
import Tags from '../../components/Tags'
import { DarkBlockHeading } from '../../components/BlockHeading'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const SpaceTime = ({ entry, showspace = false }) => {
  const hour = `${entry.time}`.slice(0, 2)
  const minutes = `${entry.time}`.slice(2)
  const roomsIndex = {
    room_01: 'Room 1',
    room_02: 'Room 2',
    room_03: 'Room 3',
    room_04: 'Room 4',
  }
  return (
    <div
      css={css`
        padding-left: 0;
        padding-right: 0;
        font-family: Lato;
        font-size: 24px;
        font-weight: bold;
        color: #57585a;
        padding-top: 25px;
      `}
    >
      {`${hour}:${minutes}`}
      {showspace && <ScheduleItemSubTitle>{roomsIndex[entry.room]}</ScheduleItemSubTitle>}
    </div>
  )
}

SpaceTime.propTypes = {
  entry: PropTypes.object,
  showspace: PropTypes.bool,
}

const ScheduleItemTitle = ({ children }) => {
  return (
    <div
      css={css`
        font-family: Lato;
        font-size: 24px;
        font-weight: 900;
        color: #57585a;
      `}
    >
      {children}
    </div>
  )
}

ScheduleItemTitle.propTypes = {
  children: PropTypes.func,
}

const ScheduleItemSubTitle = ({ children }) => {
  return (
    <div
      css={css`
        font-family: Lato;
        font-size: 18px;
        color: #57585a;

        .font-weight-bold {
          cursor: pointer;
          font-weight: bold;
        }
      `}
    >
      {children}
    </div>
  )
}

ScheduleItemSubTitle.propTypes = {
  children: PropTypes.func,
}

const ScheduleItem = ({ entry }) => {
  const { talk, speaker, subtitle = '', ...rest } = entry
  return (
    <div
      css={css`
        background-color: #f5f8fa;
        padding: 24px;
        margin-bottom: 8px;
      `}
    >
      <Row>
        <Col md="1">
          <SpaceTime entry={rest} />
        </Col>
        {/* {% include components/workshop/image.html entry=entry speaker=speaker %} */}

        <Col md="9">
          <div
            css={css`
              padding-top: 15px;
            `}
          >
            {speaker && speaker === 'tba' && <ScheduleItemTitle>To Be Announced</ScheduleItemTitle>}
            {speaker && (
              <>
                <ScheduleItemSubTitle>
                  {speaker.first_name} {speaker.last_name}
                </ScheduleItemSubTitle>
                <a
                  href="/speakers/{{ speaker.url }}#{{talk.title | slugify}}"
                  className="schedule-item__title"
                >
                  {talk.title}
                </a>
                <Tags tags={talk.tags} />
              </>
            )}
            {subtitle && (
              <>
                <ScheduleItemSubTitle>{subtitle}</ScheduleItemSubTitle>
                <ScheduleItemTitle>{entry.title}</ScheduleItemTitle>
              </>
            )}
            {!speaker && !subtitle && (
              <>
                <ScheduleItemTitle style="padding-top: 10px;">{rest.title}</ScheduleItemTitle>
                {rest.title === 'After Party' && (
                  <ScheduleItemSubTitle>
                    <a
                      href="https://www.facebook.com/xarchakoslivebar/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Xarchakos Live Bar
                    </a>
                  </ScheduleItemSubTitle>
                )}
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}

ScheduleItem.propTypes = {
  speaker: PropTypes.object,
  talk: PropTypes.object,
  entry: PropTypes.object,
  subtitle: PropTypes.string,
}

const Schedule = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          talks: allScheduleEntry(
            sort: { order: ASC, fields: time }
            filter: { day: { eq: "speaker_day" } }
          ) {
            edges {
              node {
                title
                type
                time
                talk {
                  title
                }
                speaker {
                  first_name
                }
              }
            }
          }
          workshops: allScheduleEntry(
            sort: { order: ASC, fields: time }
            filter: { day: { eq: "workshops" } }
          ) {
            edges {
              node {
                title
                room
                type
                time
                talk {
                  title
                }
              }
            }
          }
        }
      `}
      render={({ talks }) => (
        <Layout title={`Schedule`} description={'Upcomming DEVit schedule'}>
          <Header />
          <Grid>
            <Block>
              <DarkBlockHeading>Schedule</DarkBlockHeading>
            </Block>
            <ScheduleHeader />
            <div
              css={css`
                background: white;
              `}
            >
              <div
                css={css`
                  background-color: #f5f8fa;
                `}
              >
                <Tabs>
                  <TabList>
                    <Tab>Room 1</Tab>
                    <Tab>Room 2</Tab>
                    <Tab>Room 3</Tab>
                    <Tab>Room 4</Tab>
                  </TabList>

                  <TabPanel>
                    <h2>Any content 1</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                </Tabs>
              </div>
              <div
                css={css`
                  padding-top: 50px;
                  padding-bottom: 5.5em;
                `}
              >
                {talks.edges.map(({ node }, index) => (
                  <ScheduleItem key={index} entry={node} />
                ))}
              </div>
            </div>
          </Grid>
          <Footer />
        </Layout>
      )}
    />
  )
}

export default Schedule
