import React from 'react'
import PropTypes from 'prop-types'
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
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

