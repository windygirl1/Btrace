import React from "react";
import "../styles/Download.css";
import dowloand from "../imgs/dowloand.svg";

export const Dowloand = () => {
  return (
      <div className="download">
        <button className="downloadButton">
          <img className="dowloandImg" src={dowloand} alt="Скачать"/>
          <p className="downloadText">Скачать полный отчёт</p>
        </button>
      </div>
  )
}

