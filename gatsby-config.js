require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby + Strapi Blog",
    description: "Gatsby blog with Strapi",
    author: "Strapi team",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "category",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
  ],
}
