import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const TitleBlock = styled.div`
    margin-bottom: 1rem;
    h2{
        font-size: 2rem;
        margin: 0;
        padding: 0:
        line-height: 2.1;
    }
    h4{
        line-height: 1.1;
        margin: 0;
        padding: .1rem;
    }
`;

const Template = ({ data, location, pathContext }) => {
    const { markdownRemark: post } = data;
    const { frontmatter, html } = post;
    const { title, date } = frontmatter;
    const { next, prev } = pathContext;

    return (
        <div>
            {console.log(frontmatter.title)}
            <Helmet title={`${frontmatter.title} - My Blog`} />
            <div>
                <TitleBlock>
                    <h2>{frontmatter.title}</h2>
                    <h4>By: {frontmatter.author}</h4>
                    <h4>{frontmatter.date}</h4>
                </TitleBlock>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <p>
                    {prev &&
                        <Link to={prev.frontmatter.path}>
                            Previous: {prev.frontmatter.title}
                        </Link>
                    }
                </p>
                <p>
                    {next &&
                        <Link to={next.frontmatter.path}>
                            Next: {next.frontmatter.title}
                        </Link>
                    }
                </p>
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM, DD, YYYY")
                path
                tags
                excerpt
                author
            }
        }
    }
    `

export default Template;