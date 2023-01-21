import React from "react";
import "./About.scss";

import Dev from "../../Containers/Dev/Dev";

const About = () => {
  return (
    <div className="about-page">
      <div className="header">
        <h1 className="header-text">About us</h1>
      </div>
      <Dev />
    </div>
  );
};

export default About;
