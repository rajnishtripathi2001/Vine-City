import { React,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {io} from 'socket.io-client';
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import Menu from "./Pages/Menu/Menu";
import Social from "./Pages/Social/Social";
import News from "./Pages/News/News";
import Error from "./Pages/ERROR404/Error";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import Report from "./Pages/Report/Report";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Community from "./Pages/Community/Community"
import ChatPage from "./components/chat/ChatPage"


const socket = io('https://vc-chat-app-backend-production.up.railway.app/');

function App() {

  useEffect(()=>{
    socket.on('connect',()=>{
      console.log("Connected to backend");
    })
  },[]);

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
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/community" element={<Community socket={socket} />} />
        <Route exact path="/chat" element={<ChatPage socket={socket} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
  );
}

export default App;
