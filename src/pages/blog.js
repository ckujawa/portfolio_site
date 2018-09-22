import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div>
            {posts.map(({ node: post }) => {
                const { frontmatter } = post;
                return (
                    <div>
                        <p>
                            <h2>
                                <Link to={frontmatter.path}>
                                    {frontmatter.title}
                                </Link>
                            </h2>
                            <h4>By: {frontmatter.author}</h4>
                            <h4>{frontmatter.date}</h4>
                        </p>
                        <p>{frontmatter.excerpt}</p>
                    </div>
                );
            })}
        </div>
    );
};

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark{
            totalCount
            edges {
                node{
                    id
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
`;

export default BlogPage