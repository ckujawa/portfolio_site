module.exports = {
  siteMetadata: {
    title: '',
    logo: `${__dirname}/content/img/logo.png`,
  },
  plugins: ['gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      }
    }],
}
