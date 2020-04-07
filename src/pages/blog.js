import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import styled from 'styled-components'

export const query = graphql`
  query IndexQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "content" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
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
      totalCount
    }
  }
`

const Teaser = styled.div`
  margin: 1rem;
  padding: 0.5rem;
`

export default ({ data }) => (
  <Layout>
    <div>
      {data.allFile.nodes.map(({ id, childMarkdownRemark }) => {
        const { frontmatter } = childMarkdownRemark
        return (
          <Teaser key={id}>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <h4>By: {frontmatter.author}</h4>
            <h4>{frontmatter.date}</h4>
            <p>{frontmatter.excerpt}</p>
          </Teaser>
        )
      })}
    </div>
  </Layout>
)
