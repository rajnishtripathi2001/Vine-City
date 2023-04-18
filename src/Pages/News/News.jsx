import React from 'react'
import './News.css'
import PageNavBar from '../../components/PageNavBar/PageNavBar'
import Footer from '../../components/Footer/Footer'

export default function News() {
  return (
    <>
    <PageNavBar/>
    <div className='news-body'>
    this is news page
    </div>
    <Footer/>
    </>
  )
}