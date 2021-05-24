import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles({
  PCHeaderContainer: {
    width: '100%',
    padding: '0 10%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PCPageLink: {
    color: '#2b2b2b',
    textDecoration: 'none',
  },
  headerContainerRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      padding: '0 7px',
    },
  },
  icons: {
    marginTop: '5px',
    color: '#2b2b2b',
  },
})

export default function PCHeader(props) {
  const { siteTitle } = props
  const classes = useStyles()
  return (
    <div className={classes.PCHeaderContainer}>
      <div>
        <Typography variant="h5">
          <Link to="/" className={classes.PCPageLink}>
            {siteTitle}
          </Link>
        </Typography>
      </div>
      <div className={classes.headerContainerRight}>
        <Typography variant="h5">
          <Link to="/" className={classes.PCPageLink}>
            Portfolio
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/blog" className={classes.PCPageLink}>
            Blog
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/categories" className={classes.PCPageLink}>
            Category
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/tags" className={classes.PCPageLink}>
            Tag
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
