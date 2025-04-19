import React from 'react';
import "./PassiveIncome.scss";
import Block1 from './Block1/Block1';
import HowDoesThisWork from './HowDoesThisWork/HowDoesThisWork';
import VideoBlock from './VideoBlock/VideoBlock';

function PassiveIncome() {
  return (
    <section className='passive-income'>
      <div className='passive-income__container'>
        <h1 className='passive-income__title'>Публичный трейдинг</h1>
        <p className='passive-income__description'>
          платформа управления инвестициями на рынке криптовалют, которая позволяет частным инвесторам копировать реальные сделки успешных профессиональных трейдеров.
        </p>
        <div className='passive-income__content'>
          <Block1/>
          <HowDoesThisWork/>
          <VideoBlock/>
        </div>
      </div>
    </section>
  );
}

export default PassiveIncome;