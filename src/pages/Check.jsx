import React from "react";
import chevronLeft from "../imgs/chevronLeft.svg";
import Btrace from "../imgs/Btrace.svg";
import { HeaderCheck } from "../components/HeaderCheck";
import { InfoCheck } from "../components/InfoCheck";
import { Dowloand } from "../components/Download";

export const Check = () => {
  return (
    <>
      <HeaderCheck
        Btrace={Btrace}
        chevronLeft={chevronLeft}
        goBackText={"Назад"}
        subtitle={"Отчёт по адресу"}
        address={"0x68a890072515f4a9358fffd958x8347ao562r411"}
      />

      <InfoCheck
      
      />

      <Dowloand/>
    </>
  )
}