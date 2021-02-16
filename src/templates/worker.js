import { Link, graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

export default function Worker({ data }) {
  const { name, jobtitle, image } = data.worker;
  return (
    <div className="container">
      <div className="mb-6 text-sm">
        <Link to="/team" className="mr-2">
          Team
        </Link>
        <span className="mr-2">/</span>
        <span className="text-gray-700">{name}</span>
      </div>

      <div
        className="grid gap-10"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)',
        }}
      >
        <Img className="max-w-xl" fluid={image.asset.fluid} alt={name} />

        <div>
          <h1 className="page-heading">{name}</h1>
          <p className="text-xl mb-4">{jobtitle}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
            itaque minima tenetur corporis cum, ad recusandae deleniti? A,
            doloremque nihil officia soluta et eveniet. Laboriosam quasi animi
            minus ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
            itaque minima tenetur corporis cum, ad recusandae deleniti? A,
            doloremque nihil officia soluta et eveniet. Laboriosam quasi animi
            minus ab.
          </p>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    worker: sanityWorker(_id: { eq: $id }) {
      name
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
`;
