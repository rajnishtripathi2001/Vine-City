import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <section className='header'>
      
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="vcBgFootage.mp4" type="video/mp4"/>
      </video>

      <div className="overlay">
        <div className="col1"></div>
        <div className="col2">
        <h1>hello world</h1>
        <p>omg</p>
        </div>
        <div className="col3"></div>
      </div>

      

    

      
    </section>
  )
}
