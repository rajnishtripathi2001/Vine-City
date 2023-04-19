import React from "react";
import "./Section2.css";

export default function Section2() {
  return (
    <section className="sec2">
      <img src="VCFlag.png" alt="vine city logo" style={{ padding: "20px" }} />
      <br />
      <h1 style={{ fontSize: 44, color: "#2e3645", textAlign: "center" }}>
        <b>What is Vine City ?</b>
      </h1>
      <p
        style={{
          fontSize: 26,
          color: "#2e3645",
          textAlign: "center",
          fontFamily: "inherit",
        }}
      >
        Vine City is the first virtual nation and a unique international
        community <br/> focused on scientific progress on Earth. As a member, you can
        engage <br/> in political activism, connect with like-minded individuals, run<br/>
        for political office, and shape our community's future.<br/> Join us in
        creating a better world, where everyone<br/> has a voice and can make a
        difference.
        {/* Vine City is a virtual nation and community focused on scientific <br/>
        progress and political engagement. Join us to connect with like-minded<br/>
        individuals, run for political office, and shape our community's future<br/> */}
      </p>
      <br />
    </section>
  )
};
