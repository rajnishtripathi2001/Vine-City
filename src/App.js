import { React } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import Menu from "./Pages/Menu/Menu";
import Social from "./Pages/Social/Social";
import News from "./Pages/News/News";
import Error from "./Pages/ERROR404/Error";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import Report from "./Pages/Report/Report";

function App() {  
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/news" element={<News />} />
      <Route exact path="/social" element={<Social />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/report" element={<Report />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
