import React from 'react'
import { graphql } from 'gatsby'
import TagList from '../components/TagList'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
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
    margin: '0 15%',
  },
})

function Template({
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

  return (
    <Layout onPostPage={true}>
      <div className={classes.blogPostContainer}>
        <div className={classes.blogPost}>
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
          <Typography dangerouslySetInnerHTML={{ __html: html }}></Typography>
          {/* <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          /> */}
        </div>
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