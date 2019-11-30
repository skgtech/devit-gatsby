import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'

import { Grid } from 'react-flexbox-grid'

import { DarkBlockHeading } from '../BlockHeading'
import BlockCta from '../BlockCta'
import { DarkLeading } from '../Leading'
import Stack from '../Stack'

const CallForSponsors = ({ sponsors }) => {
  return (
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
          The popularity of breakfast foods is a good reason to keep dependable starters, such as
          eggs, bread and other staples, on hand.
        </DarkLeading>
        <Stack list={sponsors.edges.map(({ node }) => node)} />
        <BlockCta>Apply to sponsor</BlockCta>
      </Grid>
    </div>
  )
}

CallForSponsors.propTypes = {
  sponsors: PropTypes.array,
}

export default CallForSponsors
