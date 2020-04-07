import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { CenteredH2, BoldCapsSpan } from '../components/StyledTypography'

const ProjectDetails = styled.article`
  width: 90%;
  margin: 0.5rem auto;
  display: grid;
  grid-template-columns: 45% 50%;
  grid-template-rows: repeat(3, auto);

  div.gatsby-image-wrapper {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  div.details {
    grid-column: 2/3;
    grid-row: 1/2;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  div.description {
    grid-column: 1/-1;
    padding: 1rem;
  }
`

const Project = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title } = frontmatter
  const { next, prev } = pageContext

  return (
    <Layout>
      <Helmet title={`${title} - My Blog`} />
      <CenteredH2>{frontmatter.jobName}</CenteredH2>
      <ProjectDetails>
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
        <div className="details">
          <p>
            <BoldCapsSpan>Client:</BoldCapsSpan> {frontmatter.clientName}
          </p>
          <p>
            <BoldCapsSpan>Technology:</BoldCapsSpan> {frontmatter.technology}
          </p>
          <p>
            <BoldCapsSpan>Url:</BoldCapsSpan>{' '}
            <a href={frontmatter.publishedUrl}>{frontmatter.publishedUrl}</a>
          </p>
        </div>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <p>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous: {prev.frontmatter.title}
            </Link>
          )}
        </p>
        <p>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>
          )}
        </p>
      </ProjectDetails>
    </Layout>
  )
}

export const pageQuery = graphql`
  query WorkByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        jobName
        date(formatString: "MMMM, DD, YYYY")
        path
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
`

export default Project
