import { Link } from 'gatsby';
import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import { StaticImage } from 'gatsby-plugin-image';

import SEO from '../components/seo';
import { heroImageWidth } from '../config';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className="hero bg-purple-800 py-40 flex items-center pl-8 text-white h-screen">
      <div
        className="container grid"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${heroImageWidth}px, 1fr))`,
          gridGap: '2rem',
        }}
      >
        <div
          className="p-4 bg-white inline-block rounded-full overflow-hidden"
          style={{
            width: `${heroImageWidth}px`,
            height: `${heroImageWidth}px`,
          }}
        >
          <StaticImage
            src="../images/hero-image.svg"
            alt="Hero Image"
            width={heroImageWidth}
            height={heroImageWidth}
          />
        </div>
        <div>
          <h1 className="mt-0 mb-3 text-4xl md:text-6xl lg:text-8xl">
            AudioC0re
          </h1>
          <p className="text-2xl opacity-90">
            Redefine your shopping experience
          </p>
          <Link
            className="py-2 px-4 opacity-90 rounded bg-white text-black shadow-sm mt-8 inline-flex items-center hover:opacity-80 transition-opacity"
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
