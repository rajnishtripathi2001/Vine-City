import React from 'react'
import './Menu.css'
import PageNavBar from '../../components/PageNavBar/PageNavBar'
import Footer from '../../components/Footer/Footer'

export default function Menu() {
  return (
    <>
    <PageNavBar/>
    <div className='menu-body'>
      this is menu page
    </div>
    <Footer/>
    </>
    
  )
}