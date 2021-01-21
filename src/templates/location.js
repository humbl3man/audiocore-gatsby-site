import { Link, graphql } from "gatsby";
import React from "react";

const LocationDetail = ({ data }) => {
  const { sanityLocations: location } = data;
  return (
    <div className="page">
      <div className="container text-sm mb-6 grid auto-cols-max gap-2 grid-flow-col items-center">
        <Link
          to="/locations"
          style={{
            textDecoration: "none",
          }}
        >
          Locations
        </Link>
        /<span className="text-gray-600">{location.name}</span>
      </div>
      <div className="container">
        <h1 className="page-heading">{location.name}</h1>
        <p>{location.description}</p>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query($locationName: String!) {
    sanityLocations(name: { eq: $locationName }) {
      name
      description
    }
  }
`;

export default LocationDetail;
