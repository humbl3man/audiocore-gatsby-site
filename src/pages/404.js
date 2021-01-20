import React from "react";

import SEO from "../components/seo";

const NotFoundPage = () => (
  <div className="container">
    <SEO title="404: Not found" />
    <h1 className="page-heading text-center">Page Not Found</h1>
    <p className="text-center">
      Sorry, we can't find the page you're looking for.
    </p>
  </div>
);

export default NotFoundPage;
