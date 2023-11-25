import React from "react";
import chevronLeft from "../imgs/chevronLeft.svg";
import Btrace from "../imgs/Btrace.svg";
import speechImg from "../imgs/speechImg.svg"
import { HeaderTraining } from "../components/HeaderTraining";
import { SpeechTraining } from "../components/SpeechTraining";
import { GoNext } from "../components/GoNext";
export const Training = () => {
  return (
    <>
      <HeaderTraining
        Btrace={Btrace}
        chevronLeft={chevronLeft}
        goBackText={"Назад"}
        subtitle={"Что такое блокчейн"}
      />
    
      
      <SpeechTraining
        subtitle2={"Уроки от Btrace"}
        firstP={" Криптовалюта — это цифровая или виртуальная валюта, которая использует криптографию для обеспечения безопасности транзакций. "}
        secondP={" Криптовалюты не выпускаются центральными банками или правительствами и не обеспечены физическими активами, такими как золото или серебро. "}
        thirdP={" Вместо этого они основаны на технологии блокчейн, которая представляет собой децентрализованную базу данных, которая хранит информацию о транзакциях."}
        speechImg={speechImg}
      />
      
      
      <GoNext/>
    </>
  )
}

