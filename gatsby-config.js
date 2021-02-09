module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-sanity-image",
    //   options: {
    //     projectId: process.env.SANITY_PROJECT_ID,
    //     dataset: process.env.SANITY_DATASET,
    //     defaultImageConfig: {
    //       quality: 85,
    //       fit: "max",
    //       auto: "format",
    //     },
    //     fragmentName: "Image",
    //     fragmentType: "SanityImage",
    //     includeFragments: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-sanity`,
    //   options: {
    //     projectId: process.env.SANITY_PROJECT_ID,
    //     dataset: process.env.SANITY_DATASET,
    //     token: process.env.SANITY_TOKEN,
    //     graphqlTag: "default",
    //     watchMode: true,
    //   },
    // },
  ],
}
