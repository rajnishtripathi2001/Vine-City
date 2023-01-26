import React from 'react'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='social-media'>
            <a href="#" className='banner-a facebook'>FaceBook</a>
            <a href="#" className='banner-a twitter'>Twitter</a>
            <a href="#" className='banner-a youtube'>YouTube</a>
            <a href="#" className='banner-a discord'>Discord</a>
            <a href="#" className='banner-a instagram'>Instagram</a>
        </div>
        <hr/>

        <div className='imp-link'>
            <a className='link-bot'>About us</a>
            <a className='link-bot'>Terms and conditions</a>
            <a className='link-bot'>Data protection</a>
            <a className='link-bot'>Legal protection</a>
            <a className='link-bot'>Cookie policy</a>
            <a className='link-bot'>AR privacy policy</a>
            <a className='link-bot'>Community</a>
            <a className='link-bot'>FAQ</a>
        </div>
        <div className='logo-copyright'>
            <p>&copy; 2022 Copyright VineCity</p>
        </div>

    </div>
  )
}
export default Footer;