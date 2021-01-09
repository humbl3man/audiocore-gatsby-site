import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--primaryColor);
  .content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  h1 {
    margin: 0;
    color: #fff;
    font-size: 2rem;
  }

  h1 a {
    color: inherit;
    text-decoration: none;
  }

  nav {
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.7);
      display: inline-block;
      margin-right: 1.4rem;
      font-size: 1.5rem;
      &:hover,
      &.active {
        color: #fff;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <div className="content-wrapper">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <nav>
          <Link activeClassName="active" to="/">
            Home
          </Link>
          <Link activeClassName="active" to="/about">
            About
          </Link>
          <Link
            activeClassName="active"
            partiallyActive="active"
            to="/location/"
          >
            Locations
          </Link>
        </nav>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
