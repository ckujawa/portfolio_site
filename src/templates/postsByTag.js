import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from '../components/layout'
import styled from 'styled-components'

const PostList = styled.ul`
  margin-top: 1rem;
  padding: 0.3rem;
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  }    tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>
        <PostList>
          {edges.map(({ node }) => {
            const { path, title } = node.frontmatter
            return (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            )
          })}
        </PostList>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
