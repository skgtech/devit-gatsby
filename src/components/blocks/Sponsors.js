import React from 'react';
import GatsbyImage from 'gatsby-image';

import { Grid, Row, Col } from 'react-flexbox-grid';

import {DarkBlockHeading} from './BlockHeading'
import Stack from './Stack'

const SponsorsStack = ({title, list}) => {
  return list.length && (
    <div>
      <div css={{
        opacity: '0.7',
        fontSize: '1.33em',
        fontWeight: '900',
        textAlign: 'center',
        color: '#57585a',
      }}>{title}</div>
      <Stack list={list}/>
    </div>
  )
}

const Sponsors = ({sponsors, cfsLink}) => {
  const platinumSponsors = sponsors.filter(sponsor => sponsor.type === 'platinum');
  const goldSponsors = sponsors.filter(sponsor => sponsor.type === 'gold');
  const silverSponsors = sponsors.filter(sponsor => sponsor.type === 'silver');
  const bronzeSponsors = sponsors.filter(sponsor => sponsor.type === 'bronze');

  return (
    <div
      id="sponsors"
      css={{
        backgroundColor: '#F4F3F4',
        paddingTop: '70px',
        paddingBottom: '70px',
      }}>
      <Grid>
        <DarkBlockHeading>
          Our sponsors
        </DarkBlockHeading>
        <p className="dark">
          Thanks to all our sponsors for supporting us.
        </p>
        <SponsorsStack
          title="Platinum"
          list={platinumSponsors}
        />
        <SponsorsStack
          title="Gold"
          list={goldSponsors}
        />
        <SponsorsStack
          title="Silver"
          list={silverSponsors}
        />
        <SponsorsStack
          title="Bronze"
          list={bronzeSponsors}
        />
      </Grid>
    </div>
  );
};

export default Sponsors;
