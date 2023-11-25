import React from "react";
import "../styles/HeaderTraining.css";

export const HeaderTraining = ({Btrace, chevronLeft, goBackText, subtitle}) => {
  return (
    <div className="headerContainer">
      <div className="header">
        <img className="mainLogo" src={Btrace} alt="Btrace"/>
      <div className="goBackButton">
        <img className="chevronLeft" src={chevronLeft} alt="Назад"/>
        <span className="goBackText">{goBackText}</span>
      </div>
      </div>
      <div className="blockchainAbout">
        <h2 className="subtitle">{subtitle}</h2>
        <div className="sliderContainer">
          <span className="slider"/>
          <span className="unactiveSlider"/>
          <span className="unactiveSlider"/>
          <span className="unactiveSlider"/>
          <span className="unactiveSlider"/>
          <span className="unactiveSlider"/>
          <span className="unactiveSlider"/>
        </div>
      </div>
    </div>
  )
}

