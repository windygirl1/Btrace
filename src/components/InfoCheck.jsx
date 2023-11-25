import React from "react";
import "../styles/InfoCheck.css";
import balanceI from "../imgs/balance.svg"
import transaction from "../imgs/transaction.svg"
import lastTransactionI from "../imgs/lastTransaction.svg"
import efir from "../imgs/efir.svg"
import bitok from "../imgs/bitok.svg"
import copy from "../imgs/copy.svg"

export const InfoCheck = ({numberOfAssessment, balance, firstDate, secondDate, firstTransaction, lastTransaction}) => {
  return (
    <div className="body">
      <div className="infoContainer">
        <h3 className="riskAssessment">Общая оценка рисков</h3>
        <div className="background">
          <div className="circle">
            <div className="progress"></div>
          </div>
          <h2 className="assessment">Высокая</h2>
          <h2 className="numberOfAssessment">{numberOfAssessment}</h2><h2 className="numberOfAssessment2">/100</h2>
        </div>
        <h3 className="moreAboutAddress">Подробнее об адресе</h3>
        <div className="backgroundSmall">
          <img className="balance" src={balanceI} alt="Баланс"/>
          <p className="currentBalance">Текущий баланс</p>
          <p className="money">{balance}$</p>
        </div>
        <div className="backgroundSmall">
          <img className="transaction" src={transaction} alt="Транзакция"/>
          <p className="firstTransaction">Первая транзакция</p>
          <p className="date">{firstDate}</p>
        </div>
        <div className="backgroundSmall">
          <img className="transaction" src={lastTransactionI} alt="Транзакция"/>
          <p className="lastTransaction">Последняя транзакция</p>
          <p className="date">{secondDate}</p>
        </div>
        <h3 className="sourceOfFounds">Источник средств для оплаты газа</h3>

        <div className="sourceContainer">
          <div className="backgroundSmaller">
            <img className="efir" src={efir} alt="Эфириум"/>
            <p className="firstTransaction">{firstTransaction}</p>
        </div>
        <button className="copyCheck">
            <img src={copy} alt="Скопировать"/>
        </button>
        </div>

        <div className="sourceContainer">
        <div className="backgroundSmaller">
          <img className="bitok" src={bitok} alt="Биткоин"/>
          <p className="lastTransaction">{lastTransaction}</p>
        </div>
        <button className="copyCheck">
            <img src={copy} alt="Скопировать"/>
        </button>
        </div>
      </div>
    </div>
  )
}

