import React from "react";
import "./Header.css";

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
        <div className="col1"></div>

        <div className="col2">
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
        
        <div className="col1"></div>
      </div>
    </section>
  );
}
