import { React, useState } from "react";
import "./Login.css";
import PageNavBar from "../../components/PageNavBar/PageNavBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {

  const navigate = useNavigate();

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

    await axios
      .get("https://vine-city-api.up.railway.app/vc/user/")
      .then((res) => {
        userList = res.data.users;
      })
      .catch((error) => {
        console.log(error);
      });

    for (let i = 0; i < userList.length; i++) {
      if (
        user.username === userList[i].username &&
        user.password === userList[i].password
      ) {

        localStorage.setItem("fname", userList[i].fname);
        localStorage.setItem("lname", userList[i].lname);
        localStorage.setItem("email", userList[i].email);
        localStorage.setItem("username", userList[i].username);
        localStorage.setItem("loginStatus", "true");

        navigate("/");
        break;
      } else {
        console.log("No Such User Exist");
      }
    }
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
      
      <div className="test-data">
        <center><h4>Test User</h4></center>
        <b>Username :</b> &nbsp; testuser_01
        <br />
        <b>Password &nbsp;:</b> &nbsp; test1234
      </div>
    </>
  );
}
