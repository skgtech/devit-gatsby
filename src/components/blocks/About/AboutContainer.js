import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Organizers from '../Organizers';
import BlockWBackgroundImage from '../BlockWBackgroundImage'
import BlockCTA from '../BlockCta'
import { LightBlockHeading } from '../BlockHeading'
import { LightLeading } from '../Leading'

const About = ({imageSrc}) => {
  return (
    <BlockWBackgroundImage imageSrc={imageSrc}>
      <Grid>
        <LightBlockHeading>What is DEVit</LightBlockHeading>

        <LightLeading>
          DEVit is the leading web developer conference in South East Europe. Organized once per year, DEVit has become known for its top speaking talent, a mixture of world-class and world-renowned developers, highly specialized technology niches and developers who are on the edge of technology frontiers.
        </LightLeading>

        <Organizers />

        <BlockCTA to="/about">
          About us
          <i className="fas fa-long-arrow-alt-right"></i>
        </BlockCTA>
      </Grid>
    </BlockWBackgroundImage>
  );
};

export default About;
