import React, { useState } from 'react';
import './signin.scss';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../FireBase/firebase';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../components/Redux/auth/authSlice';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import planet from '../../img/Mirbek/planetmirba.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeTab, setActiveTab] = useState('passive');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Введите корректный email');
      return false;
    }
    if (!password) {
      setErrorMessage('Введите пароль');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const signInUser = async () => {
    if (!validateForm()) return;
    try {
      const res = await signInWithEmailAndPassword(auth, email.trim(), password);
      dispatch(setAuth({
        isAuthenticated: true,
        user: {
          uid: res.user.uid,
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        }
      }));
      toast.success('Успешный вход!');
      navigate('/');
    } catch (error) {
      toast.error('Ошибка входа: ' + error.message);
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-box">
        <img src={planet} alt="" />
        <h2>Вход</h2>
        <div className="tabs">
          <div
            className={`tab ${activeTab === 'passive' ? 'active' : ''}`}
            onClick={() => setActiveTab('passive')}
          >
            Пассивный заработок
            <span className="tooltip-icon">
              <AiOutlineInfoCircle />
              <span className="tooltip-text">Возможность копировать сделки профессионалов</span>
            </span>
          </div>
          <div
            className={`tab ${activeTab === 'public' ? 'active' : ''}`}
            onClick={() => setActiveTab('public')}
          >
            Публичный трейдинг
            <span className="tooltip-icon">
              <AiOutlineInfoCircle />
              <span className="tooltip-text">Ваши сделки будут видны другим пользователям</span>
            </span>
          </div>
        </div>

        <div className="signin-inputs">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className="password-wrapper">
            <input
            className='password-input'
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button className="signin-btn" onClick={signInUser}>
          Войти
        </button>

        <div className="signin-links">
          <Link to="/forgot-password">Забыли пароль?</Link>
          <p>Еще нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
