import React, {Fragment} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Stack from './Stack'
import Block from './Block'
import {DarkBlockHeading} from './BlockHeading'

const Partners = ({partners, weSupport}) => {
  return (
    <div>
      <Block style={{
        backgroundColor: '#fff',
      }}>
        <Grid>
          <DarkBlockHeading>
            Our partners
          </DarkBlockHeading>
          <p>
            We are lucky to have partnered with a lot of organizations across Thessaloniki. We want to thank them for helping us with DEVit every year.
          </p>
          <Stack
            style={{
              marginTop: '72px',
            }}
            list={partners}
          />
        </Grid>
      </Block>
      <Block style={{
        backgroundColor: '#f5f8fa',
      }}>
        <Grid>
          <DarkBlockHeading>
            We proudly support
          </DarkBlockHeading>
          <Stack
            style={{
              marginTop: '72px',
            }}
            list={weSupport}
          />
        </Grid>
      </Block>
    </div>
  );
};

export default Partners;
