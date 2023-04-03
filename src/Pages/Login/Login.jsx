import { React, useState } from "react";
import "./Login.css";
import PageNavBar from "../../components/PageNavBar/PageNavBar";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {

  var userList = [];
  
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    await axios.get("https://vine-city-api.up.railway.app/vc/user/")
      .then((res) => {
        userList = res.data.users
        console.log(userList)
      })
      .catch((error) => {
        console.log(error);
      });

    userList.forEach((element) => {
      if (user.username === element.username && user.password === element.password){
        console.log(" login successful \n user matched at " + userList.indexOf(element));
        
      } 
      else {
        console.log("user not matched");
      }
    });
  };

  return (
    <>
      <PageNavBar />
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <div className="txt_field">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
            <span></span>
            <label htmlFor="username">Username</label>
          </div>

          <div className="txt_field">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <span></span>
            <label htmlFor="passwd">Password</label>
          </div>

          <div className="pass">Forgot Password?</div>

          <button className="sub-btn" type="submit" onClick={login}>
            Login
          </button>

          <div className="signup_link">
            Not a Vinish? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </>
  );
}
