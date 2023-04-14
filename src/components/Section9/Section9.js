import React from 'react'
import './Section9.css'

const Section9 = ({counter}) => {

  var loginStatus = localStorage.getItem('loginStatus');

  if(loginStatus === 'true'){
    var isLoggedIn = true;
  }

  return (
  <>
  {isLoggedIn ? (
  
  <div className='sec-9'>
      <h1>
           5303 Vinish have chosen to build a new future
      </h1>
      <p>Join the future</p>
      <button>BECOME A VINISH</button>
  </div>
  
  ):(
  
    <div className='sec-9'>
    <h1>
        {counter} Vinish have chosen to build a new future
    </h1>
    <p>Join the future</p>
    <button>BECOME A VINISH</button>
    </div>
  
  )}




   
  </> 
  )
}
export default Section9;
