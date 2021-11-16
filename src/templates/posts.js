import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import PrevNextPost from '../components/PrevNextPost'
import MarkdownArticle from '../components/MarkdownArticle'
import TagList from '../components/TagList'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { connect } from 'react-redux'
import styled from 'styled-components'
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
  const { excerpt, frontmatter, html, id } = markdownRemark

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
      <Seo title={frontmatter.title} description={excerpt} />
      <Wrapper>
        {frontmatter.showTitle && <Title>{frontmatter.title}</Title>}
        <Meta>
          <TagList frontmatter={frontmatter} />
          {frontmatter.category && (
            <Category>
              Category:
              <Link to={`/categories/${kebabCase(frontmatter.category)}`}>
                {frontmatter.category}
              </Link>
            </Category>
          )}
          <Date>{`Date: ${frontmatter.date}`}</Date>
        </Meta>
        <MarkdownArticle html={html} />
        <PrevNextPost prev={prev} next={next} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  margin: 0 10%;
`

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 5px;
`

const Meta = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30.2px;
`

const Category = styled.p`
  color: rgba(0, 0, 0, 0.85);
  font-size: 90%;
  line-height: 1.8;
  margin: 10px 0 10px 15px;
  a {
    font-size: 100%;
    line-height: 1.8;
    color: #1890ff;
    border-bottom: 1px solid #1890ff;
    margin-left: 3px;
    margin-bottom: 1em;
  }
`

const Date = styled.p`
  color: rgba(0, 0, 0, 0.85);
  font-size: 90%;
  line-height: 1.8;
  text-align: center;
  margin: 10px 0 10px 15px;
`

const mapStateToProps = (state) => {
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
  query ($path: String!) {
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
      excerpt
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        sidebar
        showTitle
        hideAnchor
        tags
        category
      }
    }
  }
`
