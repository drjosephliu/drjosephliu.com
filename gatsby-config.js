require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Joseph Liu`,
    description: `Doctor turned programmer.`,
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/data/` },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 704
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          },
          `gatsby-remark-embed-video`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: { lang: `en` },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: `UA-175501343-1` },

    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Joseph Liu",
        short_name: "Joseph Liu",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#c70d3a",
        display: "standalone",
        icon: "static/favicon.ico", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
