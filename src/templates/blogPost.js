import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import RehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import TagLine from '../components/tagLine'
import {Title, Paragraph, Image, ImageDiv, Code, Pre } from '../components/blog_elements'

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
`

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: Title,
    p: Paragraph,
    img: Image,
    code: Code,
    "image-div": ImageDiv,
    pre: Pre
  }
}).Compiler;

const Template = ({ data, location, pageContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, htmlAst } = post
  const { title, date } = frontmatter
  const { next, prev } = pageContext

  return (
    <Layout>
      <article>
        {console.log(title)}
        <Helmet title={`${title} - My Blog`} />
        <div>
          <TitleBlock>
            <h2>{frontmatter.title}</h2>
            <h4>By: {frontmatter.author}</h4>
            <h4>{date}</h4>
          </TitleBlock>
          {renderAst(htmlAst)}
          <TagLine tags={frontmatter.tags} />
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
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
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

export default Template
