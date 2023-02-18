import React from 'react'
import './Section5.css'

const Section5 = () => {
  return (
    <div className='sec-5'>
      <br />
        <div className='citi-card'>
            <div className='citi-card-img'>
                <img src='idcard.jpg' alt='aadhar card'/>
            </div>
            <div className='text'>
                <h1>Become the part of the 0%</h1>
                <p>The population of Vine city is limited to 2 - nearly 0% of the world's</p>
                <button>BECOME A VINISH</button>
            </div>
        </div>
        <div className='head-of-nation'>
          <div className='head-of-nation-info'>
            <h1>"Whatever I write <br /> on a piece of paper <br /> is Law."</h1>
            <p>Head of Vine City(General of the militia),Rajnish Tripathi</p>
            <div>
              <button>BECOME AN ASGARDIAN</button>
              <button style={{backgroundColor:"#D3D3D3",border:"1px solid #D3D3D3",marginLeft:"20px"}}>ABOUT HEAD OF NATION</button>
            </div>
          </div>
            <img src='bhaiya.png' alt='bhaiya ki tasvir'/>
        </div>
    </div>
  )
}
export default Section5