import React from "react";
import "../styles/GoNext.css";

export const UnactiveButton = ({go}) => {
  return (
    <>
      <button className="unaciveButton">{go}</button>
    </>
  )
}