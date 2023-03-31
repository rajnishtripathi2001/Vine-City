import React from "react";
import "./SignUp.css";
import PageNavBar from "../../components/PageNavBar/PageNavBar";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <PageNavBar />
      <div className="form-wrapper">
        <header className="register">
          <h2>Register</h2>
        </header>

        <form>
          <div className="multi-inputs">
            <div className="form-row">
              <input type="text" required />
              <span className="placeholder">First Name</span>
            </div>

            <div className="form-row">
              <input type="text" required />
              <span className="placeholder">Last Name</span>
            </div>
          </div>

          <div className="form-row icon-input">
            <span className="icon"><i className="fas fa-envelope"/></span>
            <input type="text" required/>
            <span className="placeholder">Email</span>
          </div>

          <div className="form-row icon-input">
            <span className="icon"><i className="fas fa-user"/></span>
            <input type="text" required/>
            <span className="placeholder">Username</span>
          </div>

          <div className="form-row icon-input">
            <span className="icon"><i className="fas fa-key"/></span>
            <input type="text" required/>
            <span className="placeholder">Password</span>
          </div>

        <div className="terms-conditions">
            <input id="term" type="checkbox"/>
            <label htmlFor="terms">I agree with the <strong>Terms and Conditions</strong></label>
        </div>

        <div className="form-row">
            <button type="submit">Register</button>
        </div>

        <div className="social-wrapper">
            <header>
                <h2>Register with your Social Accounts</h2>
            </header>
            <ul>
                <li><Link to="#" className="facebook"><i className="fab fa-facebook"/></Link></li>
                <li><Link to="#" className="twitter"><i className="fab fa-twitter"/></Link></li>
                <li><Link to="#" className="google"><i className="fab fa-google"/></Link></li>
             </ul>   
        </div>

        </form>
      </div>
    </>
  );
}
