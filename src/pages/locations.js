import React from "react";
import { graphql, Link } from "gatsby";

import SEO from "../components/seo";

const AboutPage = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      <SEO title="Locations" />
      <h1 className="page-heading">Locations</h1>
      <ul>
        {data.allSanityLocations.nodes.map(({ _id: id, name, url }) => {
          return (
            <li key={id}>
              <Link to={`/locations/${url.current}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const query = graphql`
  query locationQuery {
    allSanityLocations {
      nodes {
        _id
        name
        url {
          current
        }
      }
    }
  }
`;

export default AboutPage;
