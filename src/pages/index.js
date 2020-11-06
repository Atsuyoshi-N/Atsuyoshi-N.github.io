import React from 'react'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import Profile from '../components/Profile'
import Skill from '../components/Skill'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <Profile />
      <br />
      <Experience />
      <br />
      <Skill />
    </Layout>
  )
}

export default IndexPage
