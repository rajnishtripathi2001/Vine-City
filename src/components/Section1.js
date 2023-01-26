import React from 'react'

export default function Section1() {
  return (
    <section className='sec1'>
      <h1 style={{fontSize: 47, textAlign: "center", padding: "50px"}}><b>Vine City Founding Day Documentary</b></h1>
      <video width="1000" height="500" controls style={{paddingBottom: "50px"}} >
        <source src="/bharat-ka-baccha-baccha-jai-shree-ram-bolega-dj-mix-2020.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
