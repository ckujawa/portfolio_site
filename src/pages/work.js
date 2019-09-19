import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { Capitalize } from '../utilities/utilFuncs'
import { BoldCapsSpan } from '../components/StyledTypography'

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
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: auto;
`

const Job = styled.div`
  padding: 5px;

  img {
    margin: 5px;
  }

  a.portfolio-page-link {
    text-decoration: none;
    color: black;
  }

  h2 {
    text-align: center;
  }
`
const JobDataWrapper = styled.div`
  margin: 5px;
  padding: 2px;
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
        return (
          <Job key={id}>
            <Link className="portfolio-page-link" to={frontmatter.path}>
              <h2>{frontmatter.jobName}</h2>
              <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            </Link>
            <JobDataWrapper>
              <p>
                <BoldCapsSpan>Client Name:</BoldCapsSpan>{' '}
                {frontmatter.clientName}
              </p>
              <p>
                <BoldCapsSpan>Platform:</BoldCapsSpan>{' '}
                {Capitalize(frontmatter.technology)}
              </p>
              {frontmatter.publishedUrl === null ||
              frontmatter.publishedUrl === '' ? (
                <p>This project is not currently available online</p>
              ) : (
                <p>
                  <BoldCapsSpan>Url:</BoldCapsSpan>{' '}
                  <a href={frontmatter.publishedUrl}>
                    {frontmatter.publishedUrl}
                  </a>
                </p>
              )}
            </JobDataWrapper>
          </Job>
        )
      })}
    </WorkDisplay>
  </Layout>
)
