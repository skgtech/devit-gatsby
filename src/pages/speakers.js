import React from 'react'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Speakers from '../components/Speakers'
import Header from '../components/Header'

const AllSpeakers = () => {
  return (
    <Layout title={`Speakers`} description={'All DEVit speakers'}>
      <Header />
      <Speakers />
      <Footer />
    </Layout>
  )
}

export default AllSpeakers
