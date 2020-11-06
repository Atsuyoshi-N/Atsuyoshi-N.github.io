import React from 'react'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import Profile from '../components/Profile'
import Skill from '../components/Skill'
import Work from '../components/Work'
import 'antd/lib/button/style/css'

const IndexPage = () => {
  return (
    <Layout>
      <Profile />
      <br />
      <Experience />
      <br />
      <Skill />
      <br />
      <Work />
    </Layout>
  )
}

export default IndexPage
