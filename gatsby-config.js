module.exports = {
  siteMetadata: {
    title: 'Chris Kujawa Development',
    logo: `${__dirname}/content/img/logo.png`,
  },
  plugins: ['gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128184657-1",
        head: false,
        anonymize: true,
        respectDNT: true
      },
    },
  ],
}
