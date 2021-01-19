import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { FaHeadphones } from "react-icons/fa";

const Header = ({ siteTitle, isHomePage }) => {
  return (
    <header className={`bg-yellow-400 text-black ${isHomePage ? "" : "mb-10"}`}>
      <div className="container py-6 md:flex md:items-center md:justify-between">
        <h1 className="my-0 font-bold uppercase tracking-wide">
          <Link to="/" className="inline-flex items-center">
            <FaHeadphones className="mr-2 text-3xl" />
            <span className="text-xl">{siteTitle}</span>
          </Link>
        </h1>
        <nav className="mt-6 grid gap-6 auto-cols-max grid-flow-col md:mt-0">
          <Link
            className="opacity-50 hover:opacity-100"
            activeStyle={{ opacity: 1 }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="opacity-50 hover:opacity-100"
            activeStyle={{ opacity: 1 }}
            to="/about"
          >
            About
          </Link>
          <Link
            className="opacity-50 hover:opacity-100"
            activeStyle={{ opacity: 1 }}
            partiallyActive={true}
            to="/locations/"
          >
            Locations
          </Link>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
