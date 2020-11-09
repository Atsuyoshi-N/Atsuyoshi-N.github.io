import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  headerContainer: {
    width: '100%',
    margin: '0 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  times: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 5%',
    width: '100%',
    borderBottom: '1px solid #666',
  },
  pageLink: {
    color: 'white',
    textDecoration: 'none',
  },
  menuItemRoot: {
    width: '80vw',
    height: '100vh',
  },
  menuLink: {
    display: 'block',
    width: '100%',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export default function MobileHeader(props) {
  const { siteTitle } = props
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div className={classes.menuItemRoot}>
        <MenuItem onClick={handleMobileMenuClose}>
          <div className={classes.times}>
            <Typography variant="h5" color="textSecondary">
              ×
            </Typography>
          </div>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Link to="/" className={classes.menuLink}>
            <Typography variant="h5" color="textSecondary">
              Portfolio
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Link to="/blog" className={classes.menuLink}>
            <Typography variant="h5" color="textSecondary">
              Blog
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Link to="/tags" className={classes.menuLink}>
            <Typography variant="h5" color="textSecondary">
              Tags
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <a
            href="https://github.com/Atsuyoshi-N"
            className={classes.menuLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Typography variant="h5" color="textSecondary">
              GitHub
            </Typography>
          </a>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <a
            href="https://twitter.com/a244_n"
            className={classes.menuLink}
            rel="noopener noreferrer"
            target="_blank"
            style={{ borderBottom: '1px solid #666' }}
          >
            <Typography variant="h5" color="textSecondary">
              Twitter
            </Typography>
          </a>
        </MenuItem>
      </div>
    </Menu>
  )

  return (
    <div className={classes.headerContainer}>
      <div>
        <Typography variant="h5">
          <Link to="/" className={classes.pageLink}>
            {siteTitle}
          </Link>
        </Typography>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="white"
        >
          <MenuIcon />
        </IconButton>
      </div>
      {renderMobileMenu}
    </div>
  )
}
