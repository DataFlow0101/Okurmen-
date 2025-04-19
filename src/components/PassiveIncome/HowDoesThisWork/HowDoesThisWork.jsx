import React from 'react';
import cardImg1 from "../Block1/svg/cardImg1.svg";
import card1Img1 from "../Block1/svg/card1Img1.png";
import "./HowDoesThisWork.scss";

function HowDoesThisWork() {
  return (
    <div className="how-it-works-container">
      <h1>Как это работает</h1>
      <div className='BlueLine2'></div>
      <div className="cards-container">
        <div className='card'>
          <div className='imgCon'>
            <img className='card-icon' src={cardImg1} alt="" />
            <img className='card-number' src={card1Img1} alt="1" />
          </div>
          <h3>Зарегистрируйся на нашем сайте</h3>
          <p>Создай канал и подключи API от своей биржи</p>
        </div>
        
        <div className='card'>
          <div className='imgCon'>
            <img className='card-icon' src={cardImg1} alt="" />
            <img className='card-number' src={card1Img1} alt="2" />
          </div>
          <h3>Просто продолжай торговать на своей бирже</h3>
          <p>Мы соберем статистику по всем сделкам и выведем результаты в списке трейдеров</p>
        </div>
        
        <div className='card'>
          <div className='imgCon'>
            <img className='card-icon' src={cardImg1} alt="" />
            <img className='card-number' src={card1Img1} alt="3" />
          </div>
          <h3>Стань одним из лучших трейдеров</h3>
          <p>и собирай платных подписчиков со всего мира</p>
        </div>
      </div>
    </div>
  );
}

export default HowDoesThisWork;