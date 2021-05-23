import React from 'react'
import { graphql } from 'gatsby'
import PrevNextPost from '../components/PrevNextPost'
import MarkdownArticle from '../components/MarkdownArticle'
import TagList from '../components/TagList'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
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

const useStyles = makeStyles({
  blogPostContainer: {
    margin: '0 10%',
  },
  prevnext: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
})

const MarkdownPost = styled.div`
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
  ,
  h3 {
    padding-bottom: 8px;
  }
  ,
  p {
    font-size: 16px;
    line-height: 1.9;
  }
  ,
  ul li, ol li, dl dt {
    margin: .4em 0;
  },
`

function Template({
  pageContext,
  data, // this prop will be injected by the GraphQL query below.
  onSidebarContentSelected,
  selectedKey,
  onSetSidebarContentEntry,
  sidebarEntry,
  onSetAnchorHide,
  onSetSidebarHide,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, id } = markdownRemark

  const classes = useStyles()

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
    <Layout onPostPage={true}>
      <div className={classes.blogPostContainer}>
        <div>
          <Typography variant="subtitle1" align="center">
            {frontmatter.date}
          </Typography>
          <br />
          {frontmatter.showTitle && (
            <Typography variant="h4" align="center">
              {frontmatter.title}
            </Typography>
          )}
          <br />
          <TagList frontmatter={frontmatter} />
          <MarkdownArticle html={html} />
        </div>
        <PrevNextPost prev={prev} next={next} />
      </div>
    </Layout>
  )
}

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
