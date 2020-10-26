const dotenv = require("dotenv");
dotenv.config();

const space_id = "j74p2h1xp6bv";
const access_token = "K5lrhVQT2vPP6YIonzxtjdBVFiYtnKivSzmaiYuAhdc" ;

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