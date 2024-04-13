/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CSCI E-114 Graduate Credit Assignment - Mitchell Tyson`,
    description: `A GraphQL Practice`,
    course: `CSCI E-114`,
    siteUrl: `http://localhost:8000`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
  ],
}
