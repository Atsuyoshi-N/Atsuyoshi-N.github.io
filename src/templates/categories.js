import React from 'react'
import PropTypes from 'prop-types'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'
import { Typography } from '@material-ui/core'

// Components
import { Link, graphql } from 'gatsby'

const Categories = ({ pageContext, data, location }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } categorized with "${category}"`

  return (
    <Layout location={location}>
      <div>
        <Typography variant="h5" align="center" color="textSecondary">
          {categoryHeader}
        </Typography>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          return <PostCard key={slug} post={node} />
        })}
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        <Link to="/categories">
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
            View All Categories
          </Typography>
        </Link>
      </div>
    </Layout>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
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

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
            category
            tags
          }
        }
      }
    }
  }
`
