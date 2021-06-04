const siteMetadata = require('./site-metadata.json');

module.exports = {
  pathPrefix: '/',
  siteMetadata,
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },

    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: '@stackbit/gatsby-plugin-menus',
      options: {
        sourceUrlPath: 'fields.url',
        pageContextProperty: 'menus',
      },
    },
  ],
};
