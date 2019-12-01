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

const TalksPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout>
            <Header />
            <Grid>
              <Block>
                <DarkBlockHeading>Talks</DarkBlockHeading>
                <p>
                  Our main event will took place on 10th of June. This is a list of and the talks
                  you will have the opportunity to watch to and all the great speakers you will
                  meat. The Talks day is the heart of the DEVit conference and each year we strive
                  to make it better. Join us.
                </p>
              </Block>
              <Block>
                {data.talks.edges.map(({ node }, index) => (
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

export default TalksPage

export const query = graphql`
  query {
    talks: allTalk(filter: { year: { eq: 2018 } }) {
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
