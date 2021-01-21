/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        isHomePage={path === "/"}
        siteTitle={data.site.siteMetadata?.title || `AudioC0re`}
      />
      <main>{children}</main>
      {path !== "/" && (
        <footer className="mt-16 bg-gray-100 py-6 text-sm text-gray-500">
          <div className="container">
            © {new Date().getFullYear()},{" "}
            {data.site.siteMetadata?.title || "AudioC0re"}
          </div>
        </footer>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
