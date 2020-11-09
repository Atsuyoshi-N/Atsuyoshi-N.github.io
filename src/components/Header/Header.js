import React from 'react'
import PCHeader from './PCHeader'
import MobileHeader from './MobileHeader'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 55,
    marginBottom: 20,
    backgroundColor: 'cornflowerblue',
    display: 'flex',
  },
})

function Header(props) {
  const breakpoints = useBreakpoint()
  const classes = useStyles()
  const { siteTitle } = props

  return (
    <div className={classes.root}>
      {breakpoints.sm ? (
        <MobileHeader siteTitle={siteTitle} />
      ) : (
        <PCHeader siteTitle={siteTitle} />
      )}
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
