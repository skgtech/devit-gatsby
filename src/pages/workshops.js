import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Grid } from 'react-flexbox-grid'

import Header from '../components/Header'
import Block from '../components/Block'
import { DarkBlockHeading } from '../components/BlockHeading'
import CallForPapers from '../components/CallForPapers'
import Session from '../components/Session'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'

const WorkshkopsPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout>
            <Header />
            <Grid>
              <Block>
                <DarkBlockHeading>Workshops</DarkBlockHeading>
                <p>
                  The 9th of June will be a day dedicated on workshops. View all our sessions below
                  along with their respective instructors and join us for a full day of hands-on
                  experience.
                </p>
              </Block>
              <Block>
                {data.workshops.edges.map(({ node }, index) => (
                  <Session key={index} session={node} />
                ))}
              </Block>
            </Grid>
            <CallForPapers />
            <Subscribe />
            <Footer />
          </Layout>
        )
      }}
    />
  )
}

export default WorkshkopsPage

export const query = graphql`
  query {
    workshops: allTalk(filter: { year: { eq: 2018 }, type: { eq: "Workshop" } }) {
      edges {
        node {
          id
          title
          buyLink
          tags
          speaker {
            first_name
            last_name
            url
            img {
              publicURL
              childImageSharp {
                sizes(maxWidth: 500) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
