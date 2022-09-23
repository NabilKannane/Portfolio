import React from 'react'
import "./layer1.css"
export default function layer1() {
  return (
    <div className="div2">
      
    <img
      className="myphoto"
      src="https://www.pngkit.com/png/full/84-841251_personpleasantly-distracted-man-thinking-hand-thinking.png"
    />
    <div className="Info">
      <h1 id="myname">NABIL KANNANE</h1>
      <span >FULL STACK DEVELOPER</span>
      <p>
        My specialty is to Help startups,brands, agences<br/>to increase from
        their productivity by creating<br/> attractive and clean Web/mobile
        application
      </p>
    </div>
    <div className="buttons">
      <button className="btn btn-HireMe">Hire Me</button>
      <button className="btn btn-Resume">Resume</button>
    </div>
  </div>
  )
}
