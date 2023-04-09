import "./Header.css";
import {React} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Header({counter}) {

  let slideData = [
    {
      id:"0001",
      heading: "Constitution",
      image:"VCFlag.png",
      paragragh:"this is simple brief paragraph"
    },
    {
      id:"0002",
      heading: "Orange",
      image:"VCFlag.png",
      paragragh:"this is simple brief paragraph"
    },
    {
      id:"0003",
      heading: "Grapes",
      image: "VCFlag.png",
      paragragh: "this is simple brief paragraph"
    },
    {
      id:"0004",
      heading: "guns",
      image: "VCFlag.png",
      paragragh: "this is simple brief paragraph"
    },
  ]

  const renderslide = ()=>{
    let renderedSlides = slideData.map((value)=>{
      return(
        <SwiperSlide>
          <div className="slide-data">
            <img src={value.image} alt="ftq"/>
            <div className="slide-data-text">
              <h5>{value.heading}</h5>
              <p>{value.paragragh}</p>
            </div>
          </div> 
        </SwiperSlide>
      )
    })
    return renderedSlides
  }

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
