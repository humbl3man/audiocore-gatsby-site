import { Link } from "gatsby";
import React from "react";

import SEO from "../../components/seo";

const LocIndexPage = () => (
  <div className="content-wrapper">
    <SEO title="Locations" />
    <h1>Locations</h1>
    <ul>
      <li>
        <Link to="/location/losangeles">Los Angeles</Link>
      </li>
      <li>
        <Link to="/location/sanfrancisco">San Francisco</Link>
      </li>
      <li>
        <Link to="/location/sandiego">San Diego</Link>
      </li>
    </ul>
  </div>
);

export default LocIndexPage;
