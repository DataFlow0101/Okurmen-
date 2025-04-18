import React from 'react';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="logo">
                    <img src="/Logo.png" alt="Logo" />
                </div>

                <div className="nav-wrapper">
                    <div className="nav-links">
                        <a className="link link1" href="#">Публичный трейдинг</a>
                        <a className="link link2" href="#">Пассивный заработок</a>
                        <a className="link link3" href="#">Доходы и безопасность</a>
                        <a className="link link4" href="#">Обратная связь</a>
                    </div>
                </div>

                <button className="cta-button"><img src="/Profile.png" alt="Prof"/> Вход</button>
            </div>
        </header>
    );
};

export default Header;
