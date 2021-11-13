import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location,
}) => {
  const posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostCard key={edge.node.id} post={edge.node} />)
  return (
    <Layout location={location}>
      <div>{posts}</div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query ($path: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { rootPage: { eq: $path } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(format: HTML, pruneLength: 150, truncate: true)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            rootPage
            title
            description
            tags
          }
          html
        }
      }
    }
  }
`
