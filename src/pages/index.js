import React from 'react'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import SelfIntroduction from '../components/SelfIntroduction'
import Skill from '../components/Skill'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <SelfIntroduction />
      <br />
      <Experience />
      <br />
      <Skill />
    </Layout>
  )
}

export default IndexPage
