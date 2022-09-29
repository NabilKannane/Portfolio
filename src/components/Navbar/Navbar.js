import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (

    <header>
      <nav className='menu'>
        <div className='inner'>
          <div className='container'>
           <div className='m-left logo'><h1>nabilkannane</h1></div>
             <ul className='m-right'>
              <li><Link to="skills" spy={true} smooth={true} offset={50} duration={500} className='m-link'>Skills</Link></li>
               <li><Link to="works" spy={true} smooth={true} offset={50} duration={500} className='m-link'>Works</Link></li>
                 <li><Link to="resume" spy={true} smooth={true} offset={50} duration={500} className='m-link'>Resume</Link></li>
                 <li><Link  to="hireme" spy={true} smooth={true} offset={50} duration={500} className='m-link LinkHireMe'>Hire me</Link></li>
              </ul></div>
        </div>
  </nav>
    </header>

  )
}
