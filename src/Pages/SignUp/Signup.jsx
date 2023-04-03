import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {

  const [post, setPost] = useState({
      fname: "",
      lname: "",
      email: "",
      country: "",
      username: "",
      password: "",
      category: "z",
      VID: "z",
      ResID: "z"
  })
  
  const handleinput=(event)=>{
    setPost({...post,[event.target.name]:event.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://vine-city-api.up.railway.app/vc/user/new", post)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="form-wrapper">
        <header className="register">
          <h2>Register</h2>
        </header>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="multi-inputs">
            <div className="form-row">
              <input type="text" name="fname" onChange={handleinput} required />
              <span className="placeholder">First Name</span>
            </div>

            <div className="form-row">
              <input type="text" name="lname" onChange={handleinput} required />
              <span className="placeholder">Last Name</span>
            </div>
          </div>

          <div className="form-row icon-input">
            <span className="icon">
              <i className="fas fa-envelope" />
            </span>
            <input type="text" name="email" onChange={handleinput} required />
            <span className="placeholder">Email</span>
          </div>

          <div className="form-row icon-input">
            <span className="icon">
              <i className="fas fa-earth" />
            </span>
            <input type="text" name="country" onChange={handleinput} required />
            <span className="placeholder">Country</span>
          </div>

          <div className="form-row icon-input">
            <span className="icon">
              <i className="fas fa-user" />
            </span>
            <input type="text" name="username" onChange={handleinput} required />
            <span className="placeholder">Username</span>
          </div>

          <div className="form-row icon-input">
            <span className="icon">
              <i className="fas fa-key" />
            </span>
            <input type="text" name="password" onChange={handleinput} required />
            <span className="placeholder">Password</span>
          </div>

          <div className="terms-conditions">
            <input id="term" type="checkbox" required/>
            <label htmlFor="terms">
              I agree with the <strong>Terms and Conditions</strong>
            </label>
          </div>

          <div className="form-row">
            <button type="submit">Register</button>
          </div>

          <div className="social-wrapper">
            <header>
              <h2>Register with your Social Accounts</h2>
            </header>
            <ul>
              <li>
                <Link to="#" className="facebook">
                  <i className="fab fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="#" className="twitter">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="#" className="google">
                  <i className="fab fa-google" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="signinbox">
            Already a Member ? <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </>
  );
}
