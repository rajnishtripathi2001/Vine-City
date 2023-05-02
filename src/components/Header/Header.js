import "./Header.css";
import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Header({ counter }) {
  

  var loginStatus = localStorage.getItem('loginStatus');

  if(loginStatus === 'true'){
    var isLoggedIn = true;
  }

  let slideData = [
    {
      id: "0001",
      heading: "Constitution",
      image: "VCFlag.png",
      paragragh: "Read the Constitution of Vine City",
    },
    {
      id: "0002",
      heading: "Head of the Nation",
      image: "VCFlag.png",
      paragragh: "Rajnish Tripathi Head of the Nation",
    },
    {
      id: "0003",
      heading: "Vine City",
      image: "VCFlag.png",
      paragragh: "Download the Official Documentation",
    },
    {
      id: "0004",
      heading: "Parliamentary Elections",
      image: "VCFlag.png",
      paragragh: "Learn more about upcoming elections",
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
              <h2>Welcome {localStorage.getItem('fname') + " " + localStorage.getItem('lname')}</h2>

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
