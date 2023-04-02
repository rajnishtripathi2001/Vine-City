import React from 'react'
import './About.css'
import PageNavBar from '../../components/PageNavBar/PageNavBar'
import Footer from '../../components/Footer/Footer'
import AboutBody from '../../components/AboutBody/AboutBody'

export default function About() {
  return (
    <div className='abt-body'>
    <PageNavBar/>
    <AboutBody/>
    <Footer/>
    </div>
  )
}
