import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Typography } from '@material-ui/core'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

const CategoryPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <Seo title="カテゴリー一覧" description="ブログ記事のカテゴリー一覧" />
    <div>
      <div style={{ margin: '0 10%' }}>
        <Typography variant="h5">Categories</Typography>
        <br />
        <ul>
          {group.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                <Typography>
                  {category.fieldValue} ({category.totalCount})
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

CategoryPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
