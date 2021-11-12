import React from 'react'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import Profile from '../components/Profile'
import Skill from '../components/Skill'
import Work from '../components/Work'
import { makeStyles } from '@material-ui/core/styles'
import 'antd/lib/button/style/css'

const useStyles = makeStyles(() => ({
  title: {
    color: 'cornflowerblue',
    margin: '30px 0',
  },
  footer: {
    marginTop: '30px',
  },
}))

const IndexPage = ({ location }) => {
  const classes = useStyles()
  return (
    <Layout location={location}>
      <Profile />
      <br />
      <Experience />
      <br />
      <Skill />
      <br />
      <Work />
      <div className={classes.footer}></div>
    </Layout>
  )
}

export default IndexPage
