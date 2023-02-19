import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='social-media'>
            <a href="#a" className='banner-a facebook'>FaceBook</a>
            <a href="#a" className='banner-a twitter'>Twitter</a>
            <a href="#a" className='banner-a youtube'>YouTube</a>
            <a href="#a" className='banner-a discord'>Discord</a>
            <a href="#a" className='banner-a instagram'>Instagram</a>
        </div>
        <hr/>

        <div className='imp-link'>
            <a href="#a" className='link-bot'>About us</a>
            <a href="#a" className='link-bot'>Terms and conditions</a>
            <a href="#a" className='link-bot'>Data protection</a>
            <a href="#a" className='link-bot'>Legal protection</a>
            <a href="#a" className='link-bot'>Cookie policy</a>
            <a href="#a" className='link-bot'>AR privacy policy</a>
            <a href="#a" className='link-bot'>Community</a>
            <a href="#a" className='link-bot'>FAQ</a>
        </div>
        <div className='logo-copyright'>
            <p>&copy; 2022 Copyright VineCity</p>
        </div>

    </div>
  )
}
export default Footer;