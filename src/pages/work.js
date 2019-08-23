import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { Capitalize } from '../utilities/utilFuncs'

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

const WorkDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: auto;
`

export default ({ data }) => (
  <Layout>
    <div>
      <h1>My Work</h1>
      <p>
        This page contains a sample of my work, as well as some of the more
        successful experiments I have done that I think are worth sharing. Of
        course, this site is also an exemple of the work I do. I built it using{' '}
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
    <WorkDisplay>
      {data.allFile.nodes.map(({ id, childMarkdownRemark }) => {
        const { frontmatter } = childMarkdownRemark
        const { html } = childMarkdownRemark
        console.log({ html })
        return (
          <div key={id}>
            <Link to={frontmatter.path}>
              <h2>{frontmatter.jobName}</h2>
            </Link>
            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            <p>Client Name: {frontmatter.clientName}</p>
            <p>Platform: {Capitalize(frontmatter.technology)}</p>
            <p>
              This site is currently found{' '}
              <a href={frontmatter.publishedUrl}>here</a>
            </p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )
      })}
    </WorkDisplay>
  </Layout>
)
