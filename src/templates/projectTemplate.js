import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import { Centered_H2, BoldCapsSpan } from '../components/StyledTypography'

const Project = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title } = frontmatter
  const { next, prev } = pageContext

  return (
    <Layout>
      <article>
        {console.log(title)}
        <Helmet title={`${title} - My Blog`} />
        <Centered_H2>{frontmatter.jobName}</Centered_H2>
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
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
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
      </article>
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
