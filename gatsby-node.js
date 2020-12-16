exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions

  const postTemplate = require.resolve(`./src/templates/post-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for blog post pages.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {
        // additional data can be passed via context
        ...node.frontmatter,
      },
    })
  })
}
