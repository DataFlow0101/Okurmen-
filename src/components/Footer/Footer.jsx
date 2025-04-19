import React from 'react';
import './style.scss';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__block footer__block--left">
            <img src="/Logo.png" alt="Logo" className="footer__logo" />
            <a href="#" className="footer__link footer__link--big">криптовалютная платформа для управления инвестициями.</a>
          </div>

          <div className="footer__block footer__block--center">
            <div className="footer__link-grid">
              <a href="#" className="footer__link footer__link--small" style={{ width: '150px' }}>Публичный трейдинг</a>
              <a href="#" className="footer__link footer__link--small" style={{ width: '153px' }}>Доходы и безопасность</a>
              <a href="#" className="footer__link footer__link--small" style={{ width: '163px' }}>Пассивный заработок</a>
              <a href="#" className="footer__link footer__link--small" style={{ width: '109px' }}>Обратная связь</a>
            </div>
          </div>

          {/* Справа: 4 иконки + 1 ссылка под ними */}
          <div className="footer__block footer__block--right">
            <div className="footer__icons-container">
              <a href="#"><img src="/Vector.svg" alt="icon1" className="footer__icon footer__icon--large" /></a>
              <a href="#"><img src="/ctor.svg" alt="icon2" className="footer__icon footer__icon--small" /></a>
              <a href="#"><img src="/pos.svg" alt="icon3" className="footer__icon footer__icon--small" /></a>
              <a href="#"><img src="/Whatsapp.svg" alt="icon4" className="footer__icon footer__icon--small" /></a>
            </div>
            <a href="#" className="footer__link footer__link--under-icons">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;

