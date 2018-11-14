import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark (sort:{fields: [frontmatter___date], order: DESC})
            {
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

export default ({ data }) => (
    <Layout>
        <div>
            {data.allMarkdownRemark.edges.map(({ node: post }) => {
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
                            <p>{frontmatter.excerpt}</p>
                        </p>
                    </div>
                );
            })}
        </div>
    </Layout>
)