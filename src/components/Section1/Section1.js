import React from "react";
import "./Section1.css";

export default function Section1() {
  return (
    <section className="sec1">
      <h1 style={{ fontSize: 47, textAlign: "center", padding: "50px" }}>
        <b>Vine City Founding Day Documentary</b>
      </h1>
      <video
        width="910"
        height="500"
        style={{ marginBottom: "50px"}}
        controls
        playsinline="playsInline"
        autoplay="autoPlay"
        muted="muted"
        loop="loop"
      >
        <source src="/VC_Brand.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
