import React from 'react'
import PCHeader from './PCHeader'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'
import { makeStyles } from '@material-ui/core/styles'

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
      <MediaQuery query={'(max-width: 767px'}>
        <p> hello world</p>
      </MediaQuery>
      <MediaQuery query={'(min-width: 768px'}>
        <PCHeader siteTitle={siteTitle} />
      </MediaQuery>
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
