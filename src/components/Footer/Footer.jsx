import React from 'react';
import './style.scss';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__block footer__block--left">
            <img src="/Logo.png" alt="Logo" className="footer__logo" />
            <a href="#" className="footer__link footer__link--big">О нас</a>
          </div>

          {/* Центр: 4 ссылки */}
          <div className="footer__block footer__block--center">
            <div className="footer__links">
              <a href="#" className="footer__link footer__link--small">Услуги</a>
              <a href="#" className="footer__link footer__link--small">Проекты</a>
            </div>
            <div className="footer__links">
              <a href="#" className="footer__link footer__link--small">Команда</a>
              <a href="#" className="footer__link footer__link--small">Контакты</a>
            </div>
          </div>

          {/* Иконки */}

          <div className="footer__block footer__block--right">
            <div className="footer__block footer__block--icons">
              <div className="footer__icons-container">
                <img src="/Vector.svg" alt="icon1" className="footer__icon footer__icon--large" />
                <img src="/ctor.svg" alt="icon2" className="footer__icon footer__icon--small" />
                <img src="/pos.svg" alt="icon3" className="footer__icon footer__icon--small" />
                <img src="/Whatsapp.svg" alt="icon4" className="footer__icon footer__icon--small" />
              </div>
            </div>

            <a href="#" className="footer__link footer__link--big">Поддержка</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
