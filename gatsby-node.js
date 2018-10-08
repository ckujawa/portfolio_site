const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/blogPost.js`);

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
    });
};