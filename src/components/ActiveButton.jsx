import React from "react";
import "../styles/GoNext.css";

export const ActiveButton = ({go}) => {
  return (
    <>
      <button className="aciveButton">{go}</button>
    </>
  )
}