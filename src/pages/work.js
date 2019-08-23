import React, { Component } from 'react'
import Layout from '../components/layout'

export const query = graphql`
  query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "work" } }) {
      nodes {
        sourceInstanceName
        childMarkdownRemark {
          html
          frontmatter {
            path
            date
            jobName
            technology
            clientName
            publishedUrl
          }
        }
      }
    }
  }
`

export default class about extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>My Work</h1>
          <p>
            This page contains a sample of my work, as well as some of the more
            successful experiments I have done that I think are worth sharing.
            Of course, this site is also an exemple of the work I do. I built it
            using{' '}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
            .
          </p>
        </div>
      </Layout>
    )
  }
}
