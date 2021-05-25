import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

export default function TagList(props) {
  const { frontmatter } = props
  return (
    <TagLists>
      <LocalOfferIcon fontSize="small" color="action" />
      {frontmatter.tags !== null &&
        frontmatter.tags.map(tag => (
          <Tag key={tag}>
            <Link to={`/tags/${kebabCase(tag)}`}>{`#${tag}`}</Link>
          </Tag>
        ))}
    </TagLists>
  )
}

const TagLists = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 10px 0;
`

const Tag = styled.li`
  a {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 500;
    letter-spacing: 0.00714em;
    line-height: 1.57;
    margin: 0 5px 0;
  }
`
