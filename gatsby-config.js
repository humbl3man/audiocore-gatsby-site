require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Audioc0re`,
    description: `audioc0re`,
    author: `Konstantin Minevich`,
    siteUrl: 'https://audiocore-25.netlify.app/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // pwa - web app manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Audioc0re`,
        short_name: `Audioc0re`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/headphones-icon.png`, // This path is relative to the root of the site.
      },
    },
    // pwa - service worker
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    // sanity CMS
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `9sbtqg12`,
        dataset: 'production',
        accessToken: process.env.SANITY_ACCESS_TOKEN,
        watchMode: true,
      },
    },
    // postcss
    `gatsby-plugin-postcss`,
    // sitemap
    `gatsby-plugin-sitemap`,
    // forms
    {
      resolve: `gatsby-source-formium`,
      options: {
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        accessToken: process.env.FORMIUM_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-preact`,
  ],
};
