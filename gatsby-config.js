module.exports = {
  siteMetadata: {
    title: 'Chris Kujawa Development',
    logo: `${__dirname}/content/img/logo.png`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve:  `gatsby-remark-images`,
              options: {
                maxWidth: 640,
                wrapperStyle: 'margin: 1rem auto;',
              }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'work',
        path: `${__dirname}/work`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128184657-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
