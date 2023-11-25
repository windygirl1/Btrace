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
        numberOfAssessment={100}
        balance={163}
        firstDate={"19.09.2013"}
        secondDate={"31.12.2023"}
        firstTransaction={"0x68a890072515f4a9358fffd958x8347ao562r411"}
        lastTransaction={"5x09k56872x11fz4a90058a109i82hgw8121kf2891"}
      />

      <Dowloand/>
    </>
  )
}