import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const LocationDetail = ({ data }) => {
  const { location } = data;
  return (
    <>
      <SEO title={`${location.name}`} />
      <div className="page">
        <div className="container text-sm mb-6 grid auto-cols-max gap-2 grid-flow-col items-center">
          <Link
            to="/locations"
            style={{
              textDecoration: 'none',
            }}
          >
            Locations
          </Link>
          /<span className="text-gray-600">{location.name}</span>
        </div>
        <div className="container">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
          >
            <Img fluid={location.image.asset.fluid} alt={location.name} />
            <div>
              <h1 className="page-heading">{location.name}</h1>
              <p>{location.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query($locationName: String!) {
    location: sanityLocations(name: { eq: $locationName }) {
      name
      description
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default LocationDetail;
