import React from 'react'
import styled from 'styled-components'

const StyledMarkdownPost = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  div,
  ul,
  ol,
  table,
  a,
  img {
    margin-bottom: 30.2px;
  }
  h3 {
    padding-bottom: 8px;
  }
  p {
    font-size: 16px;
    line-height: 1.9;
  }
  ul,
  ol,
  dl {
    padding-left: 2em;
  }
  ul li,
  ol li,
  dl dt {
    margin: 0.4em 0;
    font-size: 16px;
  }
`

export default function MarkdownArticle({ html }) {
  return <StyledMarkdownPost dangerouslySetInnerHTML={{ __html: html }} />
}
