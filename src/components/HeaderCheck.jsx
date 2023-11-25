import React from "react";
import "../styles/HeaderCheck.css";
import copy from "../imgs/copy.svg"

export const HeaderCheck = ({Btrace, chevronLeft, goBackText, subtitle, address}) => {
  return (
    <div className="headerContainer">
      <div className="header">
        <img className="mainLogo" src={Btrace} alt="Btrace"/>
      <div className="goBackButton">
        <img className="chevronLeft" src={chevronLeft} alt="Назад"/>
        <span className="goBackText">{goBackText}</span>
      </div>
      </div>
      <div className="subNinputContainer">
        <h2 className="subtitle">{subtitle}</h2>
        <div className="inputContainer">
          <input className="inputAddress" value={address}/>
          <button className="copy">
            <img src={copy} alt="Скопировать"/>
          </button>
        </div>
      </div>
    </div>
  )
}
