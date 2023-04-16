import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Community({ socket }) {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var userName = localStorage.getItem('username');
        //sends the username and socket ID to the Node.js server
        socket.emit('newUser', { userName, socketID: socket.id });
        navigate('/chat');
    };

  return (
    <div>
        Community page<br/>
        <button className="home__cta" onClick={handleSubmit}>Join Public Chat Room</button>
    </div>

  )
}
