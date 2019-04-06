import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'

import { Grid, Row, Col } from 'react-flexbox-grid'

import { DarkBlockHeading } from './BlockHeading'
import BlockCta from './BlockCta'
import { DarkLeading } from './Leading'
import Stack from './Stack'

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSponsor(filter: { featured: { eq: true } }) {
            edges {
              node {
                name
                url
                override_height
                img {
                  childImageSharp {
                    fixed(width: 280, height: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                  extension
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div
          css={css`
            background-color: #f4f3f4;
            padding-top: 70px;
            padding-bottom: 70px;
          `}
        >
          <Grid
            css={css`
              text-align: center;
            `}
          >
            <DarkBlockHeading>Sponsors through the years</DarkBlockHeading>
            <DarkLeading>
              The popularity of breakfast foods is a good reason to keep
              dependable starters, such as eggs, bread and other staples, on
              hand.
            </DarkLeading>
            <Stack list={data.allSponsor.edges.map(({ node }) => node)} />
            <BlockCta>Apply to sponsor</BlockCta>
          </Grid>
        </div>
      )}
    />
  )
}
