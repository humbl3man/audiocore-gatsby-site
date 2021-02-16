const { worker } = require('cluster');
const path = require('path');

async function createLocationPages({ graphql, actions }) {
  // template file
  const locationTemplate = path.resolve('./src/templates/location.js');
  const { data } = await graphql(`
    query locationQuery {
      locations: allSanityLocations {
        nodes {
          name
          url {
            current
          }
        }
      }
    }
  `);

  data.locations.nodes.forEach((location) => {
    actions.createPage({
      path: `locations/${location.url.current}`,
      component: locationTemplate,
      context: {
        locationName: location.name,
      },
    });
  });
}

async function createWorkerPages({ graphql, actions }) {
  const workerTemplate = path.resolve('./src/templates/worker.js');
  const { data } = await graphql(`
    query {
      workers: allSanityWorker {
        nodes {
          _id
          slug {
            current
          }
        }
      }
    }
  `);

  data.workers.nodes.forEach((person) => {
    console.log('building page for', person._id);
    actions.createPage({
      path: `/team/${person.slug.current}`,
      component: workerTemplate,
      context: {
        id: person._id,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([createLocationPages(params), createWorkerPages(params)]);
};
