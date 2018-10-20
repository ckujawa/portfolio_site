const path = require('path');
const _ = require('lodash');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/blogPost.js`);
    const tagTemplate = path.resolve("src/templates/postsByTag.js");

    return graphql(
        `{
            allMarkdownRemark{
                edges{
                    node{
                        html
                        id
                        frontmatter{
                            date
                            path
                            title
                            excerpt
                            tags
                        }
                    }
                }
            }
        }`
    ).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }, index) => {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {
                    prev: index === 0 ? null : posts[index - 1].node,
                    next: index + 1 > posts.length - 1 ? null : posts[index + 1].node,
                },
            });
        });

        // Tag pages:
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
            if (_.get(edge, "node.frontmatter.tags")) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        });

        // Eliminate duplicate tags
        tags = _.uniq(tags);

        // Make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagTemplate,
                context: {
                    tag,
                },
            });
        });
    });
}