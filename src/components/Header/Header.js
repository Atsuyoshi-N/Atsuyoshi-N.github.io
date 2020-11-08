import React from 'react'
import { Link } from 'gatsby'
import PCHeader from './PCHeader'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '0 10%',
    height: 55,
    marginBottom: 20,
    backgroundColor: 'cornflowerblue',
    display: 'flex',
  },
})

function Header(props) {
  const classes = useStyles()
  const { siteTitle } = props

  return (
    <div className={classes.root}>
      <PCHeader siteTitle={siteTitle} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
  }
}

export default connect(mapStateToProps)(Header)
