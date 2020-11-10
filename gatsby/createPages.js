const replacePath = require('./utils')
const path = require('path')
const _ = require('lodash')

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/posts.js`)
  const tagTemplate = path.resolve(`src/templates/tags.js`)
  const categoryTemplate = path.resolve(`src/templates/categories.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              showTitle
              tags
              title
            }
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges
    pages.forEach(({ node }, index) => {
      const prev = index === 0 ? null : pages[index - 1].node
      const next = index === pages.length - 1 ? null : pages[index + 1].node
      createPage({
        path: replacePath(node.fields.slug),
        component: postTemplate,
        context: {
          prev: prev,
          next: next,
        },
      })
    })

    const categories = result.data.categoriesGroup.group
    categories.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category.fieldValue)}`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue,
        },
      })
    })
    const tags = result.data.tagsGroup.group
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  })
}
