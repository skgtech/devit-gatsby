import React from 'react'
import { Grid } from 'react-flexbox-grid'

import Layout from '../../components/Layout'
import Block from '../../components/Block'
import { DarkBlockHeading } from '../../components/BlockHeading'
import { DarkLeading } from '../../components/Leading'
import Footer from '../../components/Footer'
import Plan from '../../components/Plan'
import Subscribe from '../../components/Subscribe'
import Header from '../../components/Header'

const PurchaseSuccess = () => {
  return (
    <Layout title={`Success`}>
      <Header />
      <Grid>
        <Block>
          <DarkBlockHeading>
            Woohoo, your order has been <br />
            <b>completed successfully</b>!
          </DarkBlockHeading>
          <DarkLeading>tl;dr: Be excellent with each other</DarkLeading>
          <p>Can’t wait to see you in June!</p>
        </Block>
      </Grid>
      <Plan />
      <Subscribe />
      <Footer />
    </Layout>
  )
}

export default PurchaseSuccess
