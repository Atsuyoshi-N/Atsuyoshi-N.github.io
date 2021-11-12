import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'

export default function TagList(props) {
  const { frontmatter } = props
  return (
    <TagLists>
      <ListTitle>Tags:</ListTitle>
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

const ListTitle = styled.p`
  font-size: 90%;
  line-height: 1.8;
`

const Tag = styled.li`
  a {
    font-size: 90%;
    color: #1890ff;
    border-bottom: 1px solid #1890ff;
    font-weight: 500;
    letter-spacing: 0.00714em;
    line-height: 1.8;
    margin-left: 3px;
  }
  &::after {
    content: ', ';
  }
  &:last-child::after {
    content: '';
  }
`
