import React from 'react'
import './Error.css'
import PageNavBar from '../../components/PageNavBar/PageNavBar'

export default function Error() {
  return (
    <div className='errp'>
    <PageNavBar/>
      <div className="error-page">
        <div className="content">
          <h1 data-text="404">404</h1>
          <h4 data-text='Opps! Page Not Found'>Opps! Page Not Found</h4>
          <p>Sorry, the page you're looking for doesn't exist. If you 
            think something is broken, report a problem.
          </p>
          <div className="btns">
            <a href="#q">Return to Homepage</a>
            <a href="#q">Report a Problem</a>
          </div>

        </div>
      </div>
    </div>
  )
}
