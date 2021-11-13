import React from 'react'
import { Link } from 'gatsby'
import MarkdownArticle from '../MarkdownArticle'
import TagList from '../TagList'
import styled from 'styled-components'

export default function PostCard({ post }) {
  return (
    <Wrapper>
      <Date>{post.frontmatter.date}</Date>
      <Link to={post.fields.slug}>
        <Title>{post.frontmatter.title}</Title>
      </Link>
      <TagList frontmatter={post.frontmatter} />
      <p>
        <i>{post.frontmatter.description}</i>
      </p>
      <ReadMore>
        <Link to={`${post.fields.slug}`}>続きを読む</Link>
      </ReadMore>
      <HorizontalLine />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 10% 50px;
`

const Date = styled.p`
  width: 100%;
  margin-bottom: 5px;
`

const Title = styled.h1`
  font-size: 1.8rem;
`

const ReadMore = styled.button`
  background-color: #dde0e4;
  width: 120px;
  margin: 0 0 0 auto;
  border: 1px solid #dde0e4;
  border-radius: 0.425rem;
  display: flex;
  justify-content: center;
  a {
    display: block;
    width: 100%;
    color: rgba(0, 0, 0, 0.85);
    padding: 0.5rem 0.5rem;
  }
`

const HorizontalLine = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #dde0e4;
`
