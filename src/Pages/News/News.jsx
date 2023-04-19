import React from "react";
import "./News.css";
import PageNavBar from "../../components/PageNavBar/PageNavBar";
import Footer from "../../components/Footer/Footer";

export default function News() {
  return (
    <>
      <PageNavBar />
      <div className="news-body">
        <b>
          We're excited to let you know that we're currently working on our Social page <br />
          to bring you an even better experience! We apologize for the inconvenience <br /> and kindly  
          ask you to check back soon. <br />
          We're looking forward to sharing the updates with you. <br /> Thank you for your
          understanding and patience.
        </b>
      </div>
      <Footer />
    </>
  );
}
