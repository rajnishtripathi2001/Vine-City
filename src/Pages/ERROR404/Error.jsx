import React from "react";
import "./Error.css";
import PageNavBar from "../../components/PageNavBar/PageNavBar";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="errp">
      <PageNavBar />
      <div className="error-page">
        <div className="content">
          <h1 data-text="404">404</h1>
          <h4 data-text="Opps! Page Not Found">Opps! Page Not Found</h4>
          <p>
            Sorry, the page you're looking for doesn't exist. If you think
            something is broken, report a problem.
          </p>
          <div className="btns">
            <Link to="/">Return to Homepage</Link>
            <Link to="/report">Report a Problem</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}