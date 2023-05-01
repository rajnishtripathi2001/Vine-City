import { React,useState } from "react";
import "./PageNavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMeatball,
  faNetworkWired,
  faNewspaper,
  faSun,
  faUser,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import {GiHamburgerMenu} from "react-icons/gi"


export default function PageNavBar() {
  
  var loginStatus = localStorage.getItem('loginStatus');

  if(loginStatus === 'true'){
    var isLoggedIn = true;
  }

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container-navP">
      <div className="logoP">
        <Link to="/">
          <img src="VCFlag.png" alt="logo" width="40" height="40" />
        </Link>
        <div className="logo-textP">
          <b>Vine City</b>
          <p>The Virtual Nation</p>
        </div>
      </div>

      {isLoggedIn ? (
        <>
          <div className={showMenu ? "topnavP activeP" : "topnavP"}>
            <div className="navbarP">
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

            <div className="signinP">
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={showMenu ? "topnavP activeP" : "topnavP"}>
            <div className="navbarP">
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

            <div className="signinP">
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
                &nbsp;Sign In
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="hamburger-menuP">
        <a href="#e" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </a>
      </div>
    </div>
  );
}
