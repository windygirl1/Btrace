import React from "react";
import "../styles/SpeechTraining.css";

export const SpeechTraining = ({subtitle2, firstP, secondP, thirdP, speechImg}) => {
  return (
    <div className="bodySpeech">
      <div className="speechContainer">
        <h2 className="subtitle2">{subtitle2}</h2>
        <p className="speech">
        {firstP}
        <br/>
        <br/>
        {secondP}
        <br/>
        <br/>
        {thirdP}
        </p>
        <img className="speechImg" src={speechImg} alt=""/>
      </div>
    </div>
  )
}

