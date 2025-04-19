import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Traders.scss';

const Traders = () => {
  const [traders, setTraders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopTraders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/top-traders');
        setTraders(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке трейдеров:', error);
        setLoading(false);
      }
    };

    fetchTopTraders();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="traders-container">
      <h2>Топ трейдеров</h2>
      <ul>
        {traders.map((trader, index) => (
          <li key={index}>
            <span>{trader.nickname}</span>
            <span>ROI: {trader.roi}</span>
            <span>PNL: {trader.pnl}</span>
            <span>Подписчики: {trader.followers}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Traders;