import React from 'react'
import DevideTheHeader from './DevideTheHeader'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

function Header(props) {
  const breakpoints = useBreakpoint()
  const { siteTitle, location } = props

  return (
    <DevideTheHeader
      siteTitle={props.siteTitle}
      location={location}
      breakpoints={breakpoints}
    />
  )
}

const mapStateToProps = state => {
  return {
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
  }
}

export default connect(mapStateToProps)(Header)
