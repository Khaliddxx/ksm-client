import React from "react";
import "./Services.scss";
import Dev from "../../Containers/Dev/Dev";

const Services = () => {
  return (
    <div className="services-page">
      <div className="header">
        <h1 className="header-text">Our Services</h1>
      </div>
      <Dev />
    </div>
  );
};

export default Services;
