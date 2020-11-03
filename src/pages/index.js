import React from 'react'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import SelfIntroduction from '../components/SelfIntroduction'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <SelfIntroduction />
      <br />
      <Experience />
    </Layout>
  )
}

export default IndexPage
