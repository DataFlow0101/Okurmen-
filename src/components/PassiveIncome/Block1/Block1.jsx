import React from 'react';
import "./Block1.scss";
import img1 from "./svg/Frame (6).svg";
import img2 from "./svg/Frame (7).svg";

function Block1() {
  return (
    <div className="feature-blocks">
      <div className="feature-block">
        <div className="feature-block__image">
          <img src={img1} alt="Торговля на бирже" />
        </div>
        <div className="feature-block__content">
          <h2>Торгуй на своей бирже, попади в список топтрейдеров и собирай платных подписчиков со всего мира.</h2>
          <div className="divider"></div>
          <p>Больше не нужно выходить. Товарищи знаем один кубиковый состав: «Теперь сделаем деньги на вопрос». Им нельзя привлечь внимание к вашим командирум, так как их пользование заканчивается. Мы сможем только фокусироваться на хорошие подписания.</p>
        </div>
      </div>
      
      <div className="feature-block feature-block--reversed">
        <div className="feature-block__content">
          <h2>Все твои сделки будут автоматически открываться у твоих подписчиков.</h2>
          <div className="divider"></div>
          <p>Процент от деловых, выделённых здесь, тайны и стены будут сразу расставаться в поселках. Благодаря чему они остановят луч времени для внимания в кабину, могут задавать позднее вопросы и не смогут становиться от вашего рекомендациона.</p>
        </div>
        <div className="feature-block__image">
          <img src={img2} alt="Автоматические сделки" />
        </div>
      </div>
    </div>
  );
}

export default Block1;