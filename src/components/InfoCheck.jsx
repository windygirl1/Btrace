import React from "react";
import "../styles/InfoCheck.css";
import balance from "../imgs/balance.svg"
import transaction from "../imgs/transaction.svg"
import lastTransaction from "../imgs/lastTransaction.svg"
import efir from "../imgs/efir.svg"
import bitok from "../imgs/bitok.svg"
import copy from "../imgs/copy.svg"

export const InfoCheck = () => {
  return (
    <div className="body">
      <div className="infoContainer">
        <h3 className="riskAssessment">Общая оценка рисков</h3>
        <div className="background">
          <div className="circle">
            <div className="progress"></div>
          </div>
          <h2 className="assessment">Высокая</h2>
          <h2 className="numberOfAssessment">100</h2><h2 className="numberOfAssessment2">/100</h2>
        </div>
        <h3 className="moreAboutAddress">Подробнее об адресе</h3>
        <div className="backgroundSmall">
          <img className="balance" src={balance} alt="Баланс"/>
          <p className="currentBalance">Текущий баланс</p>
          <p className="money">163$</p>
        </div>
        <div className="backgroundSmall">
          <img className="transaction" src={transaction} alt="Транзакция"/>
          <p className="firstTransaction">Первая транзакция</p>
          <p className="date">19.09.2023</p>
        </div>
        <div className="backgroundSmall">
          <img className="transaction" src={lastTransaction} alt="Транзакция"/>
          <p className="lastTransaction">Последняя транзакция</p>
          <p className="date">31.12.2023</p>
        </div>
        <h3 className="sourceOfFounds">Источник средств для оплаты газа</h3>

        <div className="sourceContainer">
          <div className="backgroundSmaller">
            <img className="efir" src={efir} alt="Эфириум"/>
            <p className="firstTransaction">0x68a890072515f4a9358fffd958x8347ao562r411</p>
        </div>
        <button className="copyCheck">
            <img src={copy} alt="Скопировать"/>
        </button>
        </div>

        <div className="sourceContainer">
        <div className="backgroundSmaller">
          <img className="bitok" src={bitok} alt="Биткоин"/>
          <p className="lastTransaction">5x09k56872x11fz4a90058a109i82hgw8121kf2891</p>
        </div>
        <button className="copyCheck">
            <img src={copy} alt="Скопировать"/>
        </button>
        </div>
      </div>
    </div>
  )
}

