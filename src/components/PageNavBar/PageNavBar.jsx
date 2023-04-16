import { React } from "react";
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



export default function PageNavBar() {
  
  var loginStatus = localStorage.getItem('loginStatus');

  if(loginStatus === 'true'){
    var isLoggedIn = true;
  }

  return (
    <div className={"container-navP"}>
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
        <div className="topnavP">
        <Link to="/about"><FontAwesomeIcon icon={faSun} />&nbsp;About</Link>
        <Link to="/social"><FontAwesomeIcon icon={faNetworkWired} />&nbsp;Social</Link>
        <Link to="/news"><FontAwesomeIcon icon={faNewspaper} />&nbsp;News</Link>
        <Link to="/menu"><FontAwesomeIcon icon={faCloudMeatball} />&nbsp;Menu</Link>
        <Link to="/community"><FontAwesomeIcon icon={faPeopleArrows}/>&nbsp;Community</Link>
      </div>
        <div className="signinP">
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
        </>
      ) : (
        <>
        <div className="topnavP">
        <Link to="/about"><FontAwesomeIcon icon={faSun} />&nbsp;About</Link>
        <Link to="/social"><FontAwesomeIcon icon={faNetworkWired} />&nbsp;Social</Link>
        <Link to="/news"><FontAwesomeIcon icon={faNewspaper} />&nbsp;News</Link>
        <Link to="/menu"><FontAwesomeIcon icon={faCloudMeatball} />&nbsp;Menu</Link>
      </div>
        <div className="signinP">
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;Sign In
          </Link>
        </div>
        </>
      )}
    </div>
  );
}
