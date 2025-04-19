import React from 'react'

import recurc from '../../../public/TeleBlock/resurces.png'
import big from '../../../public/TeleBlock/big.png'
import bezop from '../../../public/TeleBlock/bezop.png'
import svechi from '../../../public/TeleBlock/svechi.png'
import udob from '../../../public/TeleBlock/udobstvo.png'
import './TeleBlock.scss'

function TeleBlock() {
  return (
    <section className="advantages">
      <h1 className="advantages__title">
        Telegram трейдинг уже в прошлом
      </h1>
      <p className="advantages__subtitle">
        Мы не смогли изложить здесь даже половину всех преимуществ нашей платформы, 
        поэтому просто предлагаем самостоятельно окунуться в будущее трейдинга и пассивного заработка
      </p>

      <div className="advantages__content">
        <div className="advantages__image">
          <img src={recurc} alt="Трейдер" />
        </div>

        <div className="advantages__cards">
          <div className="advantages__card">
            <div className="advantages__card-header">
              <img src={big} alt="Доходы" />
              <h3>Большие доходы</h3>
            </div>
            <p>Профессиональные трейдеры могут увеличивать депозит на 30%, 50% и даже 100% за месяц с минимальными рисками</p>
          </div>

          <div className="advantages__card">
            <div className="advantages__card-header">
              <img src={udob} alt="Удобство" />
              <h3>Удобство</h3>
            </div>
            <p>Сделки трейдера будут моментально открываться на биржевом аккаунте подписчика (инвестора)</p>
          </div>

          <div className="advantages__card">
            <div className="advantages__card-header">
              <img src={bezop} alt="Безопасность" />
              <h3>Безопасность</h3>
            </div>
            <p>Ваши деньги будут лежать на вашем биржевом депозите, и доступ к нему имеете только вы</p>
          </div>

          <div className="advantages__card">
            <div className="advantages__card-header">
              <img src={svechi} alt="Статистика" />
              <h3>Открытая статистика</h3>
            </div>
            <p>Мы собираем полную статистику по всем сделкам трейдера, чтобы вы смогли найти лучшего из них</p>
          </div>
        </div>
      </div>

      <button className="advantages__button">Зарегистрироваться</button>
    </section>
  );
};

export default TeleBlock
