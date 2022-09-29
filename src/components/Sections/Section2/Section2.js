import React from "react";
import "./Section2.css";
import TitleSection from "../TitleSection/TitleSection";

export default function Section1() {
  return (
    <section className="section" id="skills">
      <TitleSection
        title="Skills"
        tparagraphe="Im sharing with you some framworks and tools that i used on my several project as Ui/Ux Designer and Web Developper"
      />
      <div className="cards">
        <div className="card1">
          <div className="souscard">
            <div className="minicard">
              <br />
              <img src="https://via.placeholder.com/150" />
              <br />
              <span>Web Developer</span>
            </div>
          </div>
          <div className="titrecard">Framworks</div>
          <div className="contentcard"></div>
        </div>

        <div className="card2">
          <div className="souscard">
            <div className="minicard">
              <br />
              <img src="https://via.placeholder.com/150" />
              <br />
              <span>Graphic Design</span>
            </div>
          </div>
          <div className="titrecard">Tools</div>
          <div className="contentcard"></div>
        </div>
      </div>
    </section>
  );
}
