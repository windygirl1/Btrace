import React from "react";
import "../styles/GoNext.css";
import { ActiveButton } from "./ActiveButton";
import { UnactiveButton } from "./UnactiveButton";

export const GoNext = () => {
  return (
    <div className="goNextContainer">
      <UnactiveButton
        go={"Назад"}
      />
      <ActiveButton
        go={"Далее"}
      />
    </div>
  )
}