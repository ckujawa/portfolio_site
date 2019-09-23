const path = require('path')
const _ = require('lodash')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  const tagTemplate = path.resolve('src/templates/postsByTag.js')
  const projectsTemplate = path.resolve('src/templates/projectTemplate.js')

  return graphql(
    `
      {
        blogs: allFile(
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

        projects: allFile(filter: { sourceInstanceName: { eq: "work" } }) {
          nodes {
            id
            childMarkdownRemark {
              html
              frontmatter {
                path
                date
                jobName
                technology
                clientName
                publishedUrl
                featuredImage {
                  absolutePath
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
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
    const projects = result.data.projects.nodes
    const posts = result.data.blogs.nodes

    projects.forEach(({ childMarkdownRemark }, index) => {
      createPage({
        path: childMarkdownRemark.frontmatter.path,
        component: projectsTemplate,
        context: {
          prev: index === 0 ? null : projects[index - 1].node,
          next:
            index + 1 > projects.length - 1 ? null : projects[index + 1].node,
        },
      })
    })

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
