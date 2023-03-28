import React from 'react'
import './Login.css'
import PageNavBar from '../../components/PageNavBar/PageNavBar'


export default function Login() {
  return (
    <>
    <PageNavBar/>
    <div className="form-container">
       <input className='emailinp' type="text" placeholder='email' />
       <input className='passwinp' type="text" placeholder='password' />
       <button className='loginBtn'>Login</button>
    </div>
    
    
    </>
  )
}
