import React from 'react'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Destinations from '../components/Destinations'
import Header from '../components/Header'

const Explore = () => {
  return (
    <Layout title={`Thessaloniki`} description={'Plan your stay in Thessaloniki'}>
      <Header />
      <Destinations />
      <Footer />
    </Layout>
  )
}

export default Explore
