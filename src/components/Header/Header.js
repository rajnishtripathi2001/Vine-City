import "./Header.css";
import { React, useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import UserContext from "../../context/user/UserContext";

export default function Header({ counter }) {
  const { content } = useContext(UserContext);

  const isLoggedIn = content.isLoggedIn;

  let slideData = [
    {
      id: "0001",
      heading: "Constitution",
      image: "VCFlag.png",
      paragragh: "this is simple brief paragraph",
    },
    {
      id: "0002",
      heading: "Orange",
      image: "VCFlag.png",
      paragragh: "this is simple brief paragraph",
    },
    {
      id: "0003",
      heading: "Grapes",
      image: "VCFlag.png",
      paragragh: "this is simple brief paragraph",
    },
    {
      id: "0004",
      heading: "guns",
      image: "VCFlag.png",
      paragragh: "this is simple brief paragraph",
    },
  ];

  const renderslide = () => {
    let renderedSlides = slideData.map((value) => {
      return (
        <SwiperSlide>
          <div className="slide-data">
            <img src={value.image} alt="ftq" />
            <div className="slide-data-text">
              <h5>{value.heading}</h5>
              <p>{value.paragragh}</p>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    return renderedSlides;
  };

  return (
    <section className="header">
      <video
        playsinline="playsInline"
        autoplay="autoPlay"
        muted="muted"
        loop="loop"
      >
        <source src="vcBgFootage.mp4" type="video/mp4" />
      </video>

      <div className="overlay">
        <div className="col">
          {isLoggedIn ? (
            <>
              <div className="population">
                <h3 className="population-count">5303</h3>
                <p>POPULATION OF VINE CITY</p>
                
              </div>
              <h2>Welcome {content.fname + " " + content.lname}</h2>

              <div className="ban">
                <h2>Discover new horizons!</h2>
                <p>Asgardians with a resident status have more <br/> opportunities and benefits.</p>
              </div>

              <div className="button-wrapper">
                <div className="button-flex">
                  <button>Parliament</button>
                  <button>Government</button>
                  <button>Continental Office</button>
                </div>
                
                <div className="button-flex">
                  <button>Regional Office</button>
                  <button>District Office</button>
                  <button>Area Office</button>
                </div>
              </div>

              <div className="main-btns-wrap">
                <button className="colured-btn">Get Resident Status</button>
                <button className="trans-btn">Show All Benifits</button>
              </div>

              
            </>
          ) : (
            <>
              <div className="population">
                <h3 className="population-count">{counter}</h3>
                <p>POPULATION OF VINE CITY</p>
                <p>{content.fname}</p>
              </div>
              <div className="heading">
                <h1>The Virtual Nation</h1>
                <p>Build the future through democracy and innovations.</p>
                <p>No matter where you are.</p>
              </div>
              <div className="join-button-container">
                <button className="join-button">BECOME A VINISH</button>
              </div>
            </>
          )}
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
            {renderslide()}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
