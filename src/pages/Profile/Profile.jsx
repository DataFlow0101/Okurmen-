import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../components/Redux/auth/authSlice'; // Предполагается, что у вас есть такой action
import "./profile.scss";

function Profile() {
  const { username, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()); // Диспатчим action выхода
    navigate('/register'); // Перенаправляем на страницу входа
  };

  return (
    <div className="account-container container">
      <h2>Профиль пользователя</h2>
      <div className="profile-info">
        <p><strong>Имя:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
}

export default Profile;