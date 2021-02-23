import { Link } from 'gatsby';
import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import { StaticImage } from 'gatsby-plugin-image';

import SEO from '../components/seo';
import { heroImageWidth } from '../config';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className="hero bg-white py-40 flex items-center pl-8 text-black h-screen">
      <div
        className="container grid gap-12"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr)',
        }}
      >
        <div>
          <StaticImage
            src="../images/headphones.jpg"
            alt="Hero Image"
            className="max-w-full"
          />
        </div>
        <div>
          <h1 className="mt-0 mb-3 text-5xl md:text-6xl tracking-wide text-purple-800 font-extrabold">
            AudioC0re
          </h1>
          <p className="text-2xl opacity-90 mb-10">
            Redefine your shopping experience
          </p>
          <Link
            className="py-4 text-lg px-4 opacity-90 rounded bg-purple-800 text-white shadow-sm inline-flex items-center hover:opacity-80 transition-opacity"
            to="/locations"
          >
            Visit Our Locations <MdChevronRight className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
