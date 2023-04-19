import React from "react";
import "./Social.css";
import PageNavBar from "../../components/PageNavBar/PageNavBar";
import Footer from "../../components/Footer/Footer";

export default function Social() {
  return (
    <>
      <PageNavBar />
      <div className="social-body">
        <b>
        We're sorry to inform you that our Social page is currently undergoing <br />
        maintenance to make your experience even better! Please bear with us and <br />
        check back later. We'll be back up and running in no time! <br />Thank you for 
        your patience and understanding.
        </b>
      </div>
      <Footer />
    </>
  );
}
