const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/default.jsx');
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                slug
                title
                template
              }
            }
          }
        }
      }

  `, { limit: 1000 }).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.frontmatter.slug,
        },
      });
    });
  });
};
