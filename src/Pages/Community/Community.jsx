import React from "react";
import "./Community.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Community({ socket }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var userName = localStorage.getItem("username");
    //sends the username and socket ID to the Node.js server
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chat");
  };

  var loginStatus = localStorage.getItem("loginStatus");

  if (loginStatus === "true") {
    var isLoggedIn = true;
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <div className="community-page">
            <img src="community.png" alt="com" />
            <div className="overlay-community">
              <div className="quote-container">
                "Community is much more than belonging to something; its about
                doing something together that makes belonging matter"
              </div>

              <div className="comm-btns-container">
              <button className="home__cta" onClick={handleSubmit}>
                Join Public Chat Room
              </button>
              <button className="home__cta">
                Join Public Chat Room 2
              </button>
              <button className="home__cta">
                Join Public Chat Room 3
              </button>
              <button className="home__cta">
                Join Public Chat Room 4
              </button>
              <button className="home__cta">
                Join Public Chat Room 4
              </button>
              <button className="home__cta">
                Join Public Chat Room 4
              </button>
              </div>
              
            </div>

          </div>
          <Footer />
        </>
      ) : (
        <>
          <div className="alert-box">
            <h1>Access Denied</h1>
            <p>Login to Access the Community Page</p>
            <div className="btn-box">
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to Homepage
              </button>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
