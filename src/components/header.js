import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.svg';

const Header = ({ siteTitle, isHomePage }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function closeMobileNav() {
    setMobileNavOpen(false);
  }
  function openMobileNav() {
    setMobileNavOpen(true);
  }

  return (
    <header className="global-header mb-10">
      <div className="container py-6 flex items-center justify-between">
        <h1 className="my-0 font-bold uppercase tracking-wide">
          <Link to="/" className="inline-flex items-center">
            {/* <FaHeadphones className="mr-2 text-3xl" /> */}
            <img
              src={logo}
              alt="logo"
              width={35}
              height={35}
              className="inline-block mr-2"
            />
            <span className="text-xl">{siteTitle}</span>
          </Link>
        </h1>
        <button
          type="button"
          className="block text-2xl md:hidden"
          aria-label="Open Mobile Navigation"
          onClick={openMobileNav}
        >
          <FaBars />
        </button>
        {/* #### Desktop Nav #### */}
        <nav className="hidden md:grid md:gap-6 md:auto-cols-max md:grid-flow-col md:mt-0">
          <Link
            className="opacity-90 hover:opacity-100 hover:text-purple-800"
            activeClassName="text-purple-800 opacity-100"
            to="/"
          >
            Home
          </Link>
          <Link
            className="opacity-90 hover:opacity-100 hover:text-purple-800"
            activeClassName="text-purple-800 opacity-100"
            to="/about"
          >
            About
          </Link>
          <Link
            className="opacity-90 hover:opacity-100 hover:text-purple-800"
            activeClassName="text-purple-800 opacity-100"
            partiallyActive={true}
            to="/locations/"
          >
            Locations
          </Link>
          <Link
            className="opacity-90 hover:opacity-100 hover:text-purple-800"
            activeClassName="text-purple-800 opacity-100"
            partiallyActive={true}
            to="/team/"
          >
            Team
          </Link>
          <Link
            className="opacity-90 hover:opacity-100 hover:text-purple-800"
            activeClassName="text-purple-800 opacity-100"
            to="/contact-us/"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Nav */}
        <nav
          className={`${
            !mobileNavOpen ? 'hidden ' : ''
          }fixed text-white inset-0 w-full h-full bg-purple-600 z-10 md:hidden`}
        >
          <button
            type="button"
            onClick={closeMobileNav}
            aria-label="Close"
            className="mt-4 px-4 mb-6 w-full flex items-center justify-end text-2xl"
          >
            &times;
          </button>
          <div className="px-4 grid grid-flow-row gap-5">
            <Link
              onClick={closeMobileNav}
              className="opacity-90 hover:opacity-100 text-xl"
              activeStyle={{ opacity: 1 }}
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={closeMobileNav}
              className="opacity-90 hover:opacity-100 text-xl"
              activeStyle={{ opacity: 1 }}
              to="/about"
            >
              About
            </Link>
            <Link
              onClick={closeMobileNav}
              className="opacity-90 hover:opacity-100 text-xl"
              activeStyle={{ opacity: 1 }}
              partiallyActive={true}
              to="/locations/"
            >
              Locations
            </Link>
            <Link
              onClick={closeMobileNav}
              className="opacity-90 hover:opacity-100 text-xl"
              activeStyle={{ opacity: 1 }}
              partiallyActive={true}
              to="/team/"
            >
              Team
            </Link>
            <Link
              onClick={closeMobileNav}
              className="opacity-90 hover:opacity-100 text-xl"
              activeStyle={{ opacity: 1 }}
              to="/contact-us/"
            >
              Contact
            </Link>
          </div>
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
