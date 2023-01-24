import React, { useState, useRef } from "react";
import "./Services.scss";
import Dev from "../../Containers/Dev/Dev";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Thumbs, Pagination, Mousewheel } from "swiper";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

import pic1A from "../../Assets/services/pic1A.png";
import pic2A from "../../Assets/services/pic2A.png";
import pic1B from "../../Assets/services/pic1B.png";

const ServiceCard = (props) => {
  return (
    <div
      className="img-frame"
      style={{
        backgroundImage: `url(${props.img})`,
        backgroungSize: "contain",
      }}
    >
      <h2>{props.head}</h2>
      <p>{props.p}</p>
    </div>
  );
};

const Services = () => {
  const [serviceContent, setServiceContent] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="services-page">
      <div className="header">
        <h1 className="header-text">Our Services</h1>
      </div>
      <div className="container cont">
        {serviceContent && (
          <ServiceCard
            img={pic1A}
            head={serviceContent.head}
            p={serviceContent.p}
          ></ServiceCard>
        )}
        <div className="list">
          <div className="photos">
            <button
              onClick={() => {
                setServiceContent({
                  img: pic1A,
                  head: "Construction",
                  p: [
                    [
                      "We are KSM under takes all kind of civil construction works such as:",
                      <br />,
                      "1. Steel hangers construction.",
                      <br />,
                      "2. Multi stories (floors) buildings such as commercial buildings, houses and extensions constructions",
                      <br />,
                      <br />,
                      "Our Services include: concrete works, brick works, plastering, partitioning, ceiling, painting, tiling and more!",
                    ],
                  ],
                });
              }}
              className="wwd1"
            >
              <p className="body-text" style={{ textAlign: "left" }}>
                Site Development & Construction
              </p>
            </button>
            <button
              onClick={() =>
                setServiceContent({
                  img: { pic2A },
                  head: "Electrical",
                  p: [
                    [
                      "We are KSM undertakes All Kind of Electrical works such as:",
                      <br />,
                      "1. Installation of Wiring for Light fixtures, Distribution boards, Isolators, switches and sockets, etc",
                      <br />,
                      "2. installation of Main and Final Distribution boards at the location specified in the approved shop drawings complete with MCBs/ELCB/Incoming Isolators, connection of circuit breakers, dressing and identification of the circuits as per the approved load schedule",
                    ],
                  ],
                })
              }
              className="wwd2"
            >
              <p className="body-text">Electrical</p>
            </button>
            <button
              onClick={() =>
                setServiceContent({
                  img: { pic2A },
                  head: "Air Conditioning",
                  p: [
                    [
                      "We undertake all types of Air conditioning & Ventilation installations Such as:",

                      <div>
                        <ul>
                          <li>Chilled Water System</li>
                          <li>Split air unit system</li>{" "}
                          <li>Ducted split unit system</li>{" "}
                          <li>Package unit system</li>{" "}
                          <li>Duct heater installations</li>{" "}
                          <li>
                            Centralized or individual ventilation/exhaust air
                            systems
                          </li>
                        </ul>
                      </div>,
                    ],
                  ],
                })
              }
              className="wwd3"
            >
              <p className="body-text">Air Conditioning</p>
            </button>
            <button
              onClick={() =>
                setServiceContent({
                  img: { pic2A },
                  head: "Plumbing",
                  p: [
                    [
                      "KSM undertakes plumbing works such as:",

                      <div>
                        <ul>
                          <li>
                            Water Supply networks Install and drainage System to
                            high rise commercial & residential building,
                            industrial complexes, warehouse, luxury villas, Air
                            ports, etc.
                          </li>
                          <li>Sprinkler installations.</li>
                          <li>Pumping stations installations.</li>
                          <li>Sewage treatment plants</li>
                          <li>Solar systems for pumps.</li>
                          <li>Water wells drilling.</li>
                        </ul>
                      </div>,
                    ],
                  ],
                })
              }
              className="wwd4"
            >
              <p className="body-text">Plumbing</p>
            </button>
            <button
              onClick={() =>
                setServiceContent({
                  img: { pic2A },
                  head: "Solar System Works",
                  p: [
                    [
                      "We are Ksm Undertakers all kind of Solar power supply for Lighting, Pumps & homes and doing its works like:",

                      <div>
                        <ol>
                          <li>
                            Installation of Solar panels (modules) with steel
                            bases
                          </li>
                          <li>installation of inverters</li>
                          <li>installation of cables between system element</li>
                        </ol>
                      </div>,
                    ],
                  ],
                })
              }
              className="wwd5"
            >
              <p className="body-text">Solar System Works</p>
            </button>
            <button
              onClick={() =>
                setServiceContent({
                  img: { pic2A },
                  head: "CCTV",
                  p: [
                    [
                      "Surveillance systems have become common place in almost all Houston area businesses. The choices made when choosing any technology can be overwhelming. An integrated security system that is specifically designed to meet your requirements and budget will prove to be a valuable investment. It will provide intelligence on how to run a successful company as well as resolve questionable or unlawful activity. The main question is why should you work with KSM purchase your integrated security system? Here are four (4) real benefits of doing business with us:",
                      <br />,
                      "KSM system will be designed by experienced personnel. All components will be from reputable manufactures with the best manufactures warranties available.",

                      <div>
                        <ol>
                          <li>
                            System programming training is a priority so after
                            installation you will have the knowledge to get the
                            most out of the system.
                          </li>
                          <li>
                            We offer remote monitoring and will send reports on
                            a predetermined time schedule to insure your
                            investment will operate to its fullest potential
                            when needed.
                          </li>
                          <li>
                            Full service contracts, lease agreements and
                            technical support will be quoted. You will have
                            purchasing options.
                          </li>
                        </ol>
                      </div>,
                    ],
                  ],
                })
              }
              className="wwd6"
            >
              <p className="body-text">CCTV Surveillance System</p>
            </button>
            <button
              onClick={() =>
                setServiceContent({
                  img: { pic2A },
                  head: "Fire Alarm",
                  p: [
                    [
                      "From small shops & offices to medium sized buildings, conventional fire alarm systems are a cost effective way to ensure you have a means of detecting & warning of fire. Numerous detectors can be installed on zones, when a detector is triggered the fire alarm control panel will indicate which zone has been triggered, giving you or the fire brigade an indication of the area of activation.",
                      <br />,

                      "KSM have your future covered with fire system configurations and solutions to meet your specific needs. With a Siemens fire protection solution you can rest assured you will not only provide a safer environment for your building occupants but know you’re making a smart decision to protect your people, business, and future.",
                    ],
                  ],
                })
              }
              className="wwd7"
            >
              <p className="body-text">Fire Alarm System</p>
            </button>
            <button
              onClick={() =>
                setServiceContent({
                  img: { pic2A },
                  head: "Maintenance",
                  p: [
                    [
                      "KSM offering you a periodical maintenance services undertaken by qualified engineers PC, Network, Datacenter and Cabling Maintenance is one of our key strengths we are providing you with a wide range of different computer maintenance contracts that will protect your business in a more cost- effective manner.",
                      <br />,
                      "DETAILS ARE PROVIDED UPON REQUEST FOR THE MAINTENANCE CONTRACT",
                      <br />,
                      "For post-warranty onsite break-fix support on your mission critical servers, KSM offers exceptional support and flexible coverage",
                    ],
                  ],
                })
              }
              className="wwd8"
            >
              <p className="body-text">Maintenance</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
