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
      <MarkdownArticle html={post.excerpt} />
      <ReadMore>
        <Link to={`${post.fields.slug}`}>続きを読む</Link>
      </ReadMore>
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
  background-color: #4d4d4d;
  width: 120px;
  margin: 0 0 0 auto;
  border-radius: 0.425rem;
  display: flex;
  justify-content: center;
  a {
    display: block;
    width: 100%;
    color: #fff;
    padding: 0.5rem 0.5rem;
  }
`
