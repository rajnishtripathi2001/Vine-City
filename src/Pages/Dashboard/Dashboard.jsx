import { React, useContext } from "react";
import UserContext from "../../context/user/UserContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const { content, updateContent } = useContext(UserContext);
  const isLoggedIn = content.isLoggedIn;

  const Logout = () => {
    updateContent({
      fname: "",
      lname: "",
      username: "",
      email: "",
      isLoggedIn: false,
    });
    navigate('/');
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {isLoggedIn ? (
        <>
          <p>Show User Profile</p>

          <button onClick={Logout}>Log Out</button>
          
        </>
      ) : (
        <p>Show You need to login</p>
      )}
    </div>
  );
}
