import React from 'react'
import { Link } from 'gatsby'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 55,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'cornflowerblue',
  },
  headerBlock: {
    margin: '0 20%',
  },
  pageLink: {
    color: 'white',
    textDecoration: 'none',
  },
})

function Header(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.headerBlock}>
        <Link to="/" className={classes.pageLink}>
          Portfolio
        </Link>
      </Typography>
      <Typography variant="h5" className={classes.headerBlock}>
        <Link to="/blog" className={classes.pageLink}>
          Blog
        </Link>
      </Typography>
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
