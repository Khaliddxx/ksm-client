import React from "react";
import "./About.scss";

import success from "../../Assets/About/success.png";

import Dev from "../../Containers/Dev/Dev";

const About = () => {
  return (
    <div className="about-page">
      <div className="header">
        <h1 className="header-text">About us</h1>
      </div>
      <div className="who">
        <div className="content">
          <h2>WHO ARE WE</h2>
          <p>
            KSM is a full service construction, mechanical and electrical
            engineering firm, meaning that it subscribes to a total systems
            approach. It therefore promotes a coordinated team effort with
            specialists in diverse range of disciplines. With unique
            capabilities and the advanced tools required for execution of
            complete constructions electromechanical contracts, KSM undertakes
            design, installation and commissioning of the previously mentioned
            systems as well as maintenance of the same for high-rise commercial
            and residential buildings, hotels, shopping and sports complexes,
            factories, warehouses, showrooms and workshops
          </p>
        </div>
      </div>
      <div className="history">
        <div className="content">
          <h2>HISTORY</h2>
          <p>
            KSM history is one of innovation – one marked by creative
            approaches, as well as the development of increasingly sophisticated
            systems, reflecting a unique blend of technical expertise
            technologies
          </p>
        </div>
      </div>

      <div className="mission">
        <div className="content">
          <h2>OUR MISSION</h2>
          <p>
            The mission of our company is to build a quality and comprehensive
            technology infrastructure, establish and maintain an effective
            operational environment, and deliver quality, prompt, cost effective
            and reliable technology services that align with the community
            service
          </p>
        </div>
      </div>
      <div className="success">
        <img src={success} alt="KSMM Success" />
        <div className="content">
          <h2>STORY OF SUCCESS</h2>
          <p>
            Opening its doors for the first time in 2008, KSM has grown to
            become one of the leading constructions electromechanical
            contractors in the United Arab Emirates. Indeed, since its
            inception, the company has been undertaking many prestigious
            constructions and electromechanical contracts, involving electrical,
            plumbing, air conditioning, ventilation, security, fire alarm,
            firefighting, sprinkler, MATV, CCTV, telephone, structured cabling
            and building management systems sectors
          </p>
        </div>
      </div>

      <Dev />
    </div>
  );
};

export default About;
