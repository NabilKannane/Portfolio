import React from "react";
import "./Section1.css";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typical from 'react-typical'

function Section1() {
  return (
    <section className="section1 container" >
      <div className="d-flex">
        <div className="div1">
          <span>{"</>"}</span>
          <div className="barredeco"></div>
          <p className="hello_iam">Hello, I am</p>
          <h1 id="nom">Nabil Kannane</h1>
          <Typical id="domaine"
        steps={['FULL STACK DEVELOPER', 5000,' ', 5000,]}
        loop={Infinity}
        wrapper="p"
            />
   
          <p id="paragraphe">
            My specialty is to Help startups,brands, agences
            
            to increase from<br /> their productivity by creating
           
            attractive and clean<br /> Web/mobile application
          </p>
          <div className="btns">
          <button id="btnHireMe">Hire me</button>
          <button id="btnResume">Resume</button></div>
        </div>

        <div className="div2">
          <div id="circle1"></div>
          <div id="circle2"></div>
          <div id="circleimg"></div>
        </div>
{/*
        <div className="socialmedia">
          <div className="divSM">
            <FaLinkedin className="icons" />
          </div>
          <div className="divSM">
            <FaGithub className="icons" />
          </div>
          <div className="divSM">
            <FaBehance className="icons" />
          </div>
          <div className="divSM">
            <FaInstagram className="icons" />
          </div>
        </div>
  */}
      </div>
    </section>
  );
}

export default Section1;
