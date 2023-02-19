
import "./Header.css";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Header() {
  return (
    <section className="header">
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="vcBgFootage.mp4" type="video/mp4" />
      </video>

      <div className="overlay">
        <div className="col">
          <div className="population">
            <h3 className="population-count">102598</h3>
            <p>POPULATION OF VINE CITY</p>
          </div>
          <div className="heading">
            <h1>The Virtual Nation</h1>
            <p>Build the future through democracy and innovations.</p>
            <p>No matter where you are.</p>
          </div>
          <div className="join-button-container">
            <button className="join-button">BECOME A VINISH</button>
          </div>
        </div>
        

        <div className="swipper-container">
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-data">
            <img src="asgardia.png" alt="ftq"/>
            <div className="slide-data-text">
              <h5>this is heading one</h5>
              <p>this is parra</p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-data">
            <img src="asgardia.png" alt="ftq"/>
            <div className="slide-data-text">
              <h5>this is heading</h5>
              <p>this is parra</p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-data">
            <img src="asgardia.png" alt="ftq"/>
            <div className="slide-data-text">
              <h5>this is heading</h5>
              <p>this is parra</p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-data">
            <img src="asgardia.png" alt="ftq"/>
            <div className="slide-data-text">
              <h5>this is heading</h5>
              <p>this is parra</p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-data">
            <img src="asgardia.png" alt="ftq"/>
            <div className="slide-data-text">
              <h5>this is heading</h5>
              <p>this is parra</p>
            </div>
          </div> 
        </SwiperSlide>
        
        </Swiper>
        </div>

      </div>
    </section>
  );
}
