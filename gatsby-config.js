module.exports = {
  siteMetadata: {
    title: `Upright Medical Solutions`,
    description: `Predict Risk. Prevent Falls. – Gatsby single-page site for Fall Risk Assessment.`,
    author: `@mnbrog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Upright Medical Solutions`,
        short_name: `UprightMed`,
        start_url: `/`,
        background_color: `#F7F9FA`,
        theme_color: `#0A2640`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
