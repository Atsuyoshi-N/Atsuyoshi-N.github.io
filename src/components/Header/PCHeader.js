import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles({
  headerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainerLeft: {},
  headerContainerRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      padding: '0 7px',
    },
  },
  pageLink: {
    color: 'white',
    textDecoration: 'none',
  },
  icons: {
    marginTop: '5px',
    color: 'white',
  },
})

export default function PCHeader(props) {
  const { siteTitle } = props
  const classes = useStyles()
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerContainerLeft}>
        <Typography variant="h5" className={classes.headerBlock}>
          <Link to="/" className={classes.pageLink}>
            {siteTitle}
          </Link>
        </Typography>
      </div>
      <div className={classes.headerContainerRight}>
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
        <a
          href="https://github.com/Atsuyoshi-N"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon className={classes.icons} />
        </a>
        <a
          href="https://twitter.com/a244_n"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterIcon className={classes.icons} />
        </a>
      </div>
    </div>
  )
}
