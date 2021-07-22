exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      alias:{
        path: require.resolve("path-browserify")
      },
      fallback: {
        fs: false,
        process: false,
      },
    },
    plugins: [
      plugins.provide({ process: 'process/browser' })
    ]
    
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges

  articles.forEach(({ node: { strapiId: id } }, index) => {
    createPage({
      path: `/article/${id}`,
      component: require.resolve("./src/templates/article.js"),
      context: { id },
    })
  })

  categories.forEach(({ node: { strapiId: id } }, index) => {
    createPage({
      path: `/category/${id}`,
      component: require.resolve("./src/templates/category.js"),
      context: { id },
    })
  })
}
