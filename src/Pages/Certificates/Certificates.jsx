import React, { useState } from "react";
import "./Certificates.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import pic1 from "../../Assets/certificates/1.jpeg";
import pic2 from "../../Assets/certificates/2.jpeg";
import pic3 from "../../Assets/certificates/3.jpeg";
import pic4 from "../../Assets/certificates/4.jpeg";
import pic5 from "../../Assets/certificates/5.jpeg";
import pic6 from "../../Assets/certificates/6.jpeg";
import pic7 from "../../Assets/certificates/7.jpeg";
import pic8 from "../../Assets/certificates/8.jpeg";
import pic9 from "../../Assets/certificates/9.jpeg";
import pic10 from "../../Assets/certificates/10.jpeg";
import pic11 from "../../Assets/certificates/11.jpeg";
import pic12 from "../../Assets/certificates/12.jpeg";

import { FreeMode, Navigation, Thumbs, Pagination, Mousewheel } from "swiper";

import Dev from "../../Containers/Dev/Dev";

const Certificates = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="certificates-page">
      <div className="header">
        <h1 className="header-text">Certificates</h1>
      </div>

      <div className="aboutPageMain container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={pic1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic10} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic11} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic12} />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3.2}
          // freeMode={false}
          // watchSlidesProgress={true}
          mousewheel={true}
          modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
          className="mySwiper"
          direction="vertical"
        >
          <SwiperSlide>
            <img src={pic1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic10} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic11} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic12} />
          </SwiperSlide>
        </Swiper>
      </div>
      <Dev></Dev>
    </div>
  );
};

export default Certificates;
