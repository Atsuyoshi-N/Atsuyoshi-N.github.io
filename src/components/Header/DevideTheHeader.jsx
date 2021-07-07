import React from 'react'
import PCHeader from './PCHeader'
import MobileHeader from './MobileHeader'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  height: 55;
  margin-bottom: 20;
  display: 'flex';
`

export default function DevideTheHeader(props) {
  const { siteTitle, location, breakpoints } = props
  if (location.pathname === '/') {
    return <></>
  } else {
    return (
      <HeaderContainer>
        {breakpoints.sm ? (
          <MobileHeader siteTitle={siteTitle} />
        ) : (
          <PCHeader siteTitle={siteTitle} />
        )}
      </HeaderContainer>
    )
  }
}
