import React from 'react'
import { graphql } from 'gatsby'
import PrevNextPost from '../components/PrevNextPost'
import MarkdownArticle from '../components/MarkdownArticle'
import TagList from '../components/TagList'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import styled from 'styled-components'
import 'katex/dist/katex.min.css'
import '../styles/blog.css'
import '../styles/codehighlight.css'
import {
  onSidebarContentSelected,
  onSetSidebarContentEntry,
  onSetAnchorHide,
  onSetSidebarHide,
} from '../actions/layout'
import { getSidebarSelectedKey, getSidebarEntry } from '../store/selectors'

function Template({
  pageContext,
  data, // this prop will be injected by the GraphQL query below.
  location,
  onSidebarContentSelected,
  selectedKey,
  onSetSidebarContentEntry,
  sidebarEntry,
  onSetAnchorHide,
  onSetSidebarHide,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, id } = markdownRemark

  const hideAnchor =
    frontmatter.hideAnchor === null ? false : frontmatter.hideAnchor
  const hideSidebar = frontmatter.sidebar === null ? true : false

  onSetAnchorHide(hideAnchor)
  onSetSidebarHide(hideSidebar)

  if (selectedKey !== id) onSidebarContentSelected(id)
  if (sidebarEntry !== frontmatter.sidebar)
    onSetSidebarContentEntry(frontmatter.sidebar)
  const { prev, next } = pageContext

  return (
    <Layout location={location} onPostPage={true}>
      <Wrapper>
        <Date>{frontmatter.date}</Date>
        {frontmatter.showTitle && <Title>{frontmatter.title}</Title>}
        <TagList frontmatter={frontmatter} />
        <MarkdownArticle html={html} />
        <PrevNextPost prev={prev} next={next} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  margin: 0 10%;
`

const Date = styled.p`
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  text-align: center;
  margin-bottom: 0.5em;
`

const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1em;
`

const mapStateToProps = state => {
  return {
    selectedKey: getSidebarSelectedKey(state),
    sidebarEntry: getSidebarEntry(state),
  }
}

const mapDispatchToProps = {
  onSidebarContentSelected,
  onSetSidebarContentEntry,
  onSetAnchorHide,
  onSetSidebarHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark {
      edges {
        next {
          frontmatter {
            showTitle
            title
          }
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            showTitle
            title
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        sidebar
        showTitle
        hideAnchor
        tags
      }
    }
  }
`
