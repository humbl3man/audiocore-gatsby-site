import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { MdPlace } from "react-icons/md";

import SEO from "../components/seo";

const LocationsPage = ({ data }) => {
  const { locations } = data;
  return (
    <div className="page container">
      <SEO title="Locations" />
      <h1 className="page-heading">Locations</h1>
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {locations.nodes.map(({ _id: id, name, url, image }) => {
          return (
            <div key={id}>
              <Link
                to={`/locations/${url.current}`}
                style={{
                  opacity: 1,
                  textDecoration: "none",
                }}
              >
                <div
                  className="relative p-2 bg-yellow-400 text-black rounded-md inline-flex items-center"
                  style={{
                    marginLeft: "1rem",
                    zIndex: 2,
                    transform: "rotate(-2deg) translateY(20px)",
                  }}
                >
                  <MdPlace className="mr-2" /> {name}
                </div>
                <Img
                  className="shadow-md hover:shadow-lg transition-shadow"
                  fluid={image.asset.fluid}
                  alt={name}
                  style={{ height: "350px", objectFit: "contain" }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const query = graphql`
  query locationQuery {
    locations: allSanityLocations {
      nodes {
        _id
        name
        url {
          current
        }
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default LocationsPage;
