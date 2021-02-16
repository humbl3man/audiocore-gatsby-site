import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import SEO from '../components/seo';

const TeamPage = ({ data }) => (
  <div className="page container">
    <SEO title="Team" />
    <h1 className="page-heading">Our Team</h1>
    <div
      className="grid mt-16"
      style={{
        gridColumnGap: '2rem',
        gridRowGap: '3rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      }}
    >
      {data.workers.nodes.map((person) => {
        return (
          <Link
            className="custom-link relative z-0 hover:opacity-75 transition-opacity"
            to={`/team/${person.slug.current}`}
          >
            <div
              className="p-2 rounded-md absolute z-10 bg-yellow-500 shadow-sm text-black"
              style={{
                top: '-1.2rem',
                left: '.5rem',
              }}
            >
              {person.name}
            </div>
            <Img
              className="rounded-sm"
              style={{
                height: '400px',
                objectFit: 'contain',
              }}
              fluid={person.image.asset.fluid}
              alt={person.name}
            />

            <div
              className="p-2 w-full bg-black opacity-75 text-sm text-white absolute"
              style={{
                left: 0,
                bottom: 0,
              }}
            >
              {person.jobtitle}
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

export const query = graphql`
  query {
    workers: allSanityWorker {
      nodes {
        name
        slug {
          current
        }
        jobtitle
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default TeamPage;
