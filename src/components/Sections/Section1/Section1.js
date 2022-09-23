import React from "react";
import "./Section1.css";
import Layer1 from "./layer1/layer1";


 function Section1() {
  return (
    <div className="section1 container">
      <div className="d-flex">
        <div className="div1"></div>
        <Layer1/>
        <div className="div3"></div>
      </div>
    </div>
  );
}

export default Section1();