import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../../components/Redux/auth/authSlice';
import { IoPencil } from "react-icons/io5";

import './Cabinet.scss';

const Cabinet = () => {
  const reduxUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // Загружаем данные из Redux или localStorage
  useEffect(() => {
    if (reduxUser?.username && reduxUser?.email) {
      setUsername(reduxUser.username);
      setEmail(reduxUser.email);
      localStorage.setItem('user-username', reduxUser.username);
      localStorage.setItem('user-email', reduxUser.email);
    } else {
      const storedUsername = localStorage.getItem('user-username');
      const storedEmail = localStorage.getItem('user-email');
      if (storedUsername) setUsername(storedUsername);
      if (storedEmail) setEmail(storedEmail);
    }
  }, [reduxUser]);

  // Загружаем фото
  useEffect(() => {
    if (email) {
      const savedImage = localStorage.getItem(`user-avatar-${email}`);
      if (savedImage) {
        setImage(savedImage);
      }
    }
  }, [email]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/signIn');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setImage(base64);
        localStorage.setItem(`user-avatar-${email}`, base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='cabinet-container'>
      <div className='cabinet-content'>
        <div className='avatar-wrapper'>
          <img
            src={image}
            alt="Аватар"
            className='avatar'
          />
          <button className='edit-avatar-btn' onClick={triggerFileInput}>
            <IoPencil />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>

        <div className='cabinet-info'>
          <p>{username}</p>
          <p>{email}</p>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Cabinet;
