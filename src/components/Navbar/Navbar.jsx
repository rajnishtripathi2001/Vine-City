import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMeatball,
  faNetworkWired,
  faNewspaper,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {GiHamburgerMenu} from "react-icons/gi"

export default function Navbar() {
  var loginStatus = localStorage.getItem("loginStatus");

  if (loginStatus === "true") {
    var isLoggedIn = true;
  }

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  //{navbar ? 'container-nav active' : 'container-nav'}

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (
    <div className={navbar ? "container-nav active" : "container-nav"}>
      <div className="logo">
        <Link to="/">
          <img src="VCFlag.png" alt="logo" width="40" height="40" />
        </Link>
        <div className="logo-text">
          <b>Vine City</b>
          <p>The Virtual Nation</p>
        </div>
      </div>

      {isLoggedIn ? (
        <>
          <div className={showMenu ? "topnav active" : "topnav"}>
            <div className="navbar">
              <ul>
                <li>
                  <Link to="/about">
                    <FontAwesomeIcon icon={faSun} />
                    &nbsp;About
                  </Link>
                </li>
                <li>
                  <Link to="/social">
                    <FontAwesomeIcon icon={faNetworkWired} />
                    &nbsp;Social
                  </Link>
                </li>
                <li>
                  <Link to="/news">
                    <FontAwesomeIcon icon={faNewspaper} />
                    &nbsp;News
                  </Link>
                </li>
                <li>
                  <Link to="/menu">
                    <FontAwesomeIcon icon={faCloudMeatball} />
                    &nbsp;Menu
                  </Link>
                </li>
                <li>
                  <Link to="/community">
                    <FontAwesomeIcon icon={faCloudMeatball} />
                    &nbsp;community
                  </Link>
                </li>
              </ul>
            </div>

            <div className="signin">
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={showMenu ? "topnav active" : "topnav"}>
            <div className="navbar">
              <ul>
                <li>
                  <Link to="/about">
                    <FontAwesomeIcon icon={faSun} />
                    &nbsp;About
                  </Link>
                </li>
                <li>
                  <Link to="/social">
                    <FontAwesomeIcon icon={faNetworkWired} />
                    &nbsp;Social
                  </Link>
                </li>
                <li>
                  <Link to="/news">
                    <FontAwesomeIcon icon={faNewspaper} />
                    &nbsp;News
                  </Link>
                </li>
                <li>
                  <Link to="/menu">
                    <FontAwesomeIcon icon={faCloudMeatball} />
                    &nbsp;Menu
                  </Link>
                </li>
              </ul>
            </div>

            <div className="signin">
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
                &nbsp;Sign In
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="hamburger-menu">
        <a href="#e" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </a>
      </div>
    </div>
  );
}
