import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default function PCHeader(props) {
  const { siteTitle } = props
  return (
    <Wrapper>
      <Title>
        <Link to="/blog">{siteTitle}</Link>
      </Title>
      <RelatedLinks>
        <EachLink>
          <Link to="/categories">Categories</Link>
        </EachLink>
        <EachLink>
          <Link to="/tags">Tags</Link>
        </EachLink>
        <EachLink>
          <Link to="/">Portfolio</Link>
        </EachLink>
        <EachLink>
          <a
            href="https://github.com/Atsuyoshi-N"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </EachLink>
        <EachLink>
          <a
            href="https://twitter.com/a244_n"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </EachLink>
      </RelatedLinks>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 10px;
`

const Title = styled.h2`
  text-align: center;
  font-size: 2.225em;
  margin: 20px 0;
  a {
    color: #2b2b2b;
  }
  &::after {
    content: none;
  }
`

const RelatedLinks = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dde0e4;
`

const EachLink = styled.li`
  font-size: 1.4em;
  margin: 0 8px 30.2px;
  a {
    color: rgba(0, 0, 0, 0.54);
  }
`
