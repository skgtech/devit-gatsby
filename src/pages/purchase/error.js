import React from 'react'
import { Grid } from 'react-flexbox-grid'

import Layout from '../../components/Layout'
import Block from '../../components/Block'
import { DarkBlockHeading } from '../../components/BlockHeading'
import { DarkLeading } from '../../components/Leading'
import Footer from '../../components/Footer'
import Subscribe from '../../components/Subscribe'
import Header from '../../components/Header'

const PurchaseError = () => {
  return (
    <Layout title={`Success`}>
      <Header />
      <Grid>
        <Block>
          <DarkBlockHeading>
            There was a problem <br /> completing your order.
          </DarkBlockHeading>
          <DarkLeading>tl;dr: Be excellent with each other</DarkLeading>
          <p>
            Please contact us at <a href="mailto:tickets@devitconf.org">tickets@devitconf.org</a>.
          </p>
        </Block>
      </Grid>
      <Subscribe />
      <Footer />
    </Layout>
  )
}

export default PurchaseError
