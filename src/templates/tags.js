import React from 'react'
import PropTypes from 'prop-types'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'
import { Typography } from '@material-ui/core'

// Components
import { Link, graphql } from 'gatsby'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <Typography variant="h5" align="center" color="textSecondary">
          {tagHeader}
        </Typography>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          return <PostCard key={slug} post={node} />
        })}
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        <Link to="/tags">
          <Typography
            variant="h4"
            align="center"
            color="primary"
            style={{
              color: 'cornflowerblue',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            View All tags
          </Typography>
        </Link>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(format: HTML, pruneLength: 150, truncate: true)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
          }
        }
      }
    }
  }
`
