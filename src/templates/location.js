import { Link } from "gatsby";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const LocationDetail = ({ pageContext }) => {
  const { locationName } = pageContext;
  return (
    <div className="page">
      <div className="container text-sm mb-6 grid auto-cols-max gap-2 grid-flow-col items-center">
        <Link to="/locations">Locations</Link>
        <FaChevronRight className="text-gray-400" />
        <span>{locationName}</span>
      </div>
      <div className="container">
        <h1 className="page-heading">{locationName}</h1>
      </div>
    </div>
  );
};

export default LocationDetail;
