import React from "react";
import "./Home.scss";
import Dev from "../../Containers/Dev/Dev";

import wwd1 from "../../Assets/Home/wwd1.png";
import wwd2 from "../../Assets/Home/wwd2.png";
import wwd3 from "../../Assets/Home/wwd3.png";

import scroll from "../../Assets/Home/scroll.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/autoplay";

import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
} from "../../Assets/clients";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="content">
          <h1 className="hero-text">
            Your <span style={{ color: "#C8A33E" }}>ONE STOP</span> for
            Construction, Engineering and contracting.
          </h1>
          <p>
            We follow a total systems approach for offering solutions to
            construction, mechanical and electrical engineering , air
            conditioning, plumbing, solar systems, CCTV surveillance, fire
            alarms, and maintenance.{" "}
          </p>
          <a href="/projects">
            <button className="btn">View Projects</button>
          </a>
        </div>
      </div>

      <div className="whatwedo">
        <h1 className="head-text">What We Do</h1>
        <p className="body-text" style={{ width: "65%", margin: "auto" }}>
          We promote a coordinated team effort, with specialities in diverse
          range of disciplines. Using unique capabilities and advanced tools
          required for execution of complete constructions and contracts.
        </p>
        <div className=" photos">
          <div className="wwd1">
            <p className="body-text">Site Development & Construction</p>
          </div>
          <div className="wwd2">
            <p className="body-text">
              Solar Power <br /> Supply
            </p>
          </div>
          <div className="wwd3">
            <p className="body-text">
              Electrical Setup <br /> Services
            </p>
          </div>
        </div>
        <a href="/services" style={{ marginTop: "24px" }}>
          <button className="btn">View All Categories</button>
        </a>
      </div>

      <div className="ourservices">
        <div className="left">
          <h1 className="head-text">Our Services</h1>
          <p className="body-text">
            We undertake design, installation, and commissioning for many
            systems. Including{" "}
            <b>
              {" "}
              solar systems, construction, electrical, air conditioning,
              plumbing, CCTV, maintenance,
            </b>{" "}
            and more!
          </p>
          <br />
          <br />
          <p className="body-text">
            {" "}
            We Also offer maintenance for high-rise commercial and residential
            buildings, hotels, shopping and sports complexes
          </p>
          <br />
          <a href="/services">
            <button className="btn">View All Categories</button>
          </a>
        </div>
        <div className="right">
          <img src={scroll} alt="" />
        </div>
      </div>

      <div className="strip"></div>

      <div className="clients">
        <div className="content">
          <h1 className="hero-text">Our Clients</h1>
        </div>
        {/* <Swiper
          className="swiper"
          modules={Autoplay}
          autoplay={{ delay: 1000 }}
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={one} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={two} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={three} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={four} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={five} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={six} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={seven} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={eight} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nine} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ten} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={eleven} />
          </SwiperSlide>
        </Swiper> */}
        <div className="clients-pics">
          <img src={one} alt="US Embassy in Sudan" />
          <img src={two} alt="Qatari Diar" />
          <img src={three} alt="Sudan Police" />
          <img src={four} alt="Corinthia Hotel" />
          <img src={five} alt="Axxa" />
          <img src={six} alt="CTC Group" />
          <img src={seven} alt="National Students Welfare Fund" />
          <img src={eight} alt="SPPC" />
          <img src={nine} alt="World Vision" />
          <img src={ten} alt="American Refugee Committee" />
          <img src={eleven} alt="Murtada Maaz" />
        </div>
      </div>

      {/* <div className="spline">
        <iframe
          src="https://my.spline.design/buildingsunsetcopy-0994990168a43c2f984fdd5ed57ed226/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div> */}
      <Dev></Dev>
    </div>
  );
};

export default Home;
