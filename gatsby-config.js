const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    plugins: [
        "gatsby-plugin-typescript",
        `gatsby-plugin-material-ui`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: `j74p2h1xp6bv`,
              accessToken: `K5lrhVQT2vPP6YIonzxtjdBVFiYtnKivSzmaiYuAhdc`,
            },
        },
    ]
}