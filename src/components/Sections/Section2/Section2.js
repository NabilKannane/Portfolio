import React from 'react'
import "./Section2.css";
import TitleSection from '../TitleSection/TitleSection';

export default function Section1() {
  return (
    <div className='section2'>
      <TitleSection title="Works"
        tparagraphe="Im sharing with you some framworks and tools that i used on my several project as Ui/Ux Designer and Web Developper" />
        <br/><br/><div className='d-flex'>
        <div className='work-card1'></div>
        <div className='work-card2'>
          <img src='https://via.placeholder.com/150'/>
          <h3>WEB DEVELOPER</h3>
        </div>
        </div>

    </div>
  )
}
