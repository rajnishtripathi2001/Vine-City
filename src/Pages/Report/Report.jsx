import React from 'react'
import './Report.css'
import PageNavBar from '../../components/PageNavBar/PageNavBar'

export default function Report() {
  return (
    <div>
        <PageNavBar />
        <div className="reportbody">
            <h1>Report Problem</h1>
            <form className='report-form' action="https://formsubmit.co/rajnishtripathi2001@gmail.com" method="POST">
                <input type="text" id='name' name='name' placeholder='name' />
                <input type="text" id='email' name='email' placeholder='email' />
                <input type="text" id='summary' name='summary' placeholder='summary' />
                <textarea name="message" id="message" cols="45" rows="10"></textarea>
                <button id='report-btn' type='submit'>Report</button>
            </form>
        </div>
    </div>
  )
}
