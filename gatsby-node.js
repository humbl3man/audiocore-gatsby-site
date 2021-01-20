const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  // template file
  const locationTemplate = path.resolve("./src/templates/location.js");
  const { data } = await graphql(`
    query locationQuery {
      allSanityLocations {
        nodes {
          name
          url {
            current
          }
        }
      }
    }
  `);

  data.allSanityLocations.nodes.forEach((location) => {
    actions.createPage({
      path: `locations/${location.url.current}`,
      component: locationTemplate,
      context: {
        locationName: location.name,
      },
    });
  });
};
