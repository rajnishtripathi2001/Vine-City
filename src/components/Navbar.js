import React from 'react'

export default function Navbar() {
  return (
    <div className='container-nav'>

        <div className="logo">
            <a href="#"><img src="logo512.png" alt="logo" width="40" height="40"/></a>
        </div>

        <div className="topnav">
            <a className='App' href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        
        <div className="search-container">
        <form action="/search" method="get">
            <input class="search expandright" id="searchright" type="search" name="q" placeholder="Search"/>
            <label class="button searchbutton" for="searchright"><span class="mglass">&#9906;</span></label>
        </form>
        </div>

        <div class="b4571c b9f6c2">
            en
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="C1">
                <path d="M2,8.05l2.11-2.11L12,13.84l7.89-7.89L22,8.05l-10,10L2,8.05z"></path>
            </svg>
        </div>

    </div>
  )
}
