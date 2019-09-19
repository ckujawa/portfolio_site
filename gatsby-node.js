const path = require('path')
const _ = require('lodash')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  const tagTemplate = path.resolve('src/templates/postsByTag.js')

  return graphql(
    `
      {
        allFile(
          filter: { sourceInstanceName: { eq: "content" } }
          sort: {
            fields: childMarkdownRemark___frontmatter___date
            order: DESC
          }
        ) {
          nodes {
            id
            childMarkdownRemark {
              html
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                path
                tags
                excerpt
                author
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allFile.nodes

    posts.forEach(({ childMarkdownRemark }, index) => {
      createPage({
        path: childMarkdownRemark.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index + 1 > posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, post => {
      if (_.get(post, 'childMarkdownRemark.frontmatter.tags')) {
        tags = tags.concat(post.childMarkdownRemark.frontmatter.tags)
      }
    })

    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}
