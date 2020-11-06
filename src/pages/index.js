import React from 'react'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import Profile from '../components/Profile'
import Skill from '../components/Skill'
import Work from '../components/Work'
import Typography from '@material-ui/core/Typography'
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

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Typography align="center" variant="h2" className={classes.title}>
        @a244 Portfolio
      </Typography>
      <br />
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
