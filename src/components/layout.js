import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import './index.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery{
        site{
          siteMetadata{
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'The portfolio and blog of Chris Kujawa, a full-stack web developer specializing in creating blazingly fast e-commerce sites with Gatsby and React JS.' },
            { name: 'keywords', content: 'web development, web developer, ecommerce development, ecommerce website design, ecommerce website development, ecommerce website developer, ecommerce website, custom ecommerce website, GatsbyJS, GatsbyJS Development, GatsbyJS website, Gatsby ecommerce, ReactJS, React developer' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            margin: '0 auto',
            maxWidth: 1200,
            padding: '1.5rem',
            paddingTop: 0,
            backgroundColor: '#dd655688'
          }}
        >
          {children}
          <p> </p>
        </div>
      </div >
    )}
  />
)

