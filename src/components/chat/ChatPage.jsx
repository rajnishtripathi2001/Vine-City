import React, { useEffect, useState, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useNavigate } from "react-router-dom";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  var loginStatus = localStorage.getItem("loginStatus");

  if (loginStatus === "true") {
    var isLoggedIn = true;
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="chat">
            <ChatBar socket={socket} />
            <div className="chat__main">
              <ChatBody
                messages={messages}
                typingStatus={typingStatus}
                lastMessageRef={lastMessageRef}
              />
              <ChatFooter socket={socket} />
            </div>
          </div>
        </>
      ) : (
        <div className="alert-box">
          <h1>Access Denied</h1>
          <p>Login to Access the Chat Room</p>
          <div className="btn-box">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Homepage
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPage;
