import React from "react";
import "./Section1.css";
import Layer1 from "./layer1/layer1";


 function Section1() {
  return (
    <div className="section1 container">
      <div className="d-flex">









        <div className="div1">

          <div className="Div1Card d-flex">
            <div className="sous-div1"></div>
            <div className="sous-div2">
              <h3>Hello , I am</h3>
              <h2>Nabil Kannane</h2>
              
              </div>
          </div>

        </div>









        <Layer1/>
        <div className="div3">

            <div className="socialmedia">
                <div id="linkdin"className="divSM"></div>
                <div className="divSM"></div>
                <div className="divSM"></div>
                <div className="divSM"></div>
            </div>



        </div>
      </div>
    </div>
  );
}

export default Section1;