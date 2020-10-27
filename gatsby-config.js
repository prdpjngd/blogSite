require("dotenv").config()

const space_id = process.env.GATSBY_CONTENTFUL_SPACE_ID;
const access_token = process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN;

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
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: space_id,
              accessToken: access_token,
              host : "cdn.contentful.com",
              environment : "master",
              downloadLocal : false,
              forceFullSync : false,
              pageLimit : 100,
              useNameForId : true
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