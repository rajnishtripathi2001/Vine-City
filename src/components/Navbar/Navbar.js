import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMeatball,
  faNetworkWired,
  faNewspaper,
  faSun,
} from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
 
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

      <div className="topnav">

        <Link to="/about"><FontAwesomeIcon icon={faSun} />&nbsp;About</Link>
        <Link to="/social"><FontAwesomeIcon icon={faNetworkWired} />&nbsp;Social</Link>
        <Link to="/news"><FontAwesomeIcon icon={faNewspaper} />&nbsp;News</Link>
        <Link to="/menu"><FontAwesomeIcon icon={faCloudMeatball} />&nbsp;Menu</Link>
      </div>

      <div className="search-container">
        <form action="/search" method="get">
          <input
            className="search expandright"
            id="searchright"
            type="search"
            name="q"
            placeholder="Search"
          />
          <label className="button searchbutton" htmlFor="searchright">
            <span className="mglass">&#9906;</span>
          </label>
        </form>
      </div>

      
    </div>
  );
}
