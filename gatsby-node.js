const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
      allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
        }
    }
  `)
  console.log(result);
  result.data.allContentfulBlogPost.edges.map(edge => {
    createPage({
        path: `/${edge.node.slug}`,
        component: path.resolve(`./src/templates/detail.tsx`),
        context: {
          slug: edge.node.slug,
        },
    })
  })
}