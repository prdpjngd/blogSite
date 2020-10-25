const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    siteMetadata: {
      title: `Medium`,
      description: `Medium Where you share your stories and idea.`
    },
    plugins: [
        "gatsby-plugin-typescript",
        `gatsby-plugin-material-ui`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: `j74p2h1xp6bv`,
              accessToken: `K5lrhVQT2vPP6YIonzxtjdBVFiYtnKivSzmaiYuAhdc`,
            },
        },
        {
          resolve: `gatsby-transformer-sharp`,
          options: {
            // The option defaults to true
            checkSupportedExtensions: false,
          },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/assets/`,
            },
        },
    ]
}