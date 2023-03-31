import React from 'react'
import './Login.css'
import PageNavBar from '../../components/PageNavBar/PageNavBar'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
    <PageNavBar/>
    <div className="form-container">
       <h1>Login</h1>
       <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label htmlFor="username">Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label htmlFor="passwd">Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a Vinish? <Link to="/signup">Sign Up</Link>
        </div>
       </form>
    </div>
    </>
  )
}
