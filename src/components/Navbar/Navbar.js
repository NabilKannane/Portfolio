import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (

    <header>
      <nav className='menu'>
        <div className='inner'>
           <div className='m-left logo'><h1>NabilKannane</h1></div>
             <ul className='m-right'>
              <li><a href='#' className='m-link'>Skills</a></li>
               <li><a href='#' className='m-link' >Works</a></li>
                 <li><a href='#' className='m-link'>Resume</a></li>
                 <li><a href='#' className='m-link LinkHireMe'>Hire me</a></li>
              </ul>
        </div>
  </nav>
    </header>

  )
}
