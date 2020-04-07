import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import { Footer } from '../components/footer'
import { GlobalStyle } from '../components/global'
import styled from 'styled-components'

const ChildContainer = styled.div`
  background: #d6defa;
  width: 100%;
  min-height: calc(100vh - 150px);
  padding: 1.5rem;
`

export const PureLayout = ({ children, data }) => {
  console.log({ children })
  console.log({ data })
  return (
    <div>
      <GlobalStyle />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content:
              'The portfolio and blog of Chris Kujawa, a full-stack web developer specializing in creating blazingly fast e-commerce sites with Gatsby and React JS.',
          },
          {
            name: 'keywords',
            content:
              'web development, web developer, ecommerce development, ecommerce website design, ecommerce website development, ecommerce website developer, ecommerce website, custom ecommerce website, GatsbyJS, GatsbyJS Development, GatsbyJS website, Gatsby ecommerce, ReactJS, React developer',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header />
      <ChildContainer>{children}</ChildContainer>
      <Footer />
    </div>
  )
}

export const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <PureLayout {...props} data={data} />}
  />
)
