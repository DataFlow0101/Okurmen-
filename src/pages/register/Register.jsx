import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EyeToggle from '../../Components/eye-password/EyeToggle';
import './register.scss';
import planet from '../../img/Mirbek/planetmirba.png';
import phone from '../../img/Mirbek/registerphone.png';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('Пожалуйста, введите корректный email');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Пароль должен содержать минимум 6 символов');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      
    }
  };

  return (
    <div className="register-container">
      <img  src={phone} alt="" className="register-phone" />
      <div className="blue">
        <div className="blue-div"></div>
      </div>
    <div className="register-form-container">
      <div className="blue-div"></div>
      <img src={planet} alt="" />
      <h1>Регистрация</h1>
      
      <div className="register-subheader">
        <h2>Пассивный заработок</h2>
        <p>Публичный трейдинг</p>
      </div>

      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-section">
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
        </div>

        <div className="form-section">
          
          <div className="form-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
            <EyeToggle
              className="eye-icon"
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
            />
          </div>
            {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <div className="form-section">
          
          <div className="form-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Подтвердить пароль"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
            <EyeToggle
              className="eye-icon"
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
            />
          </div>
            {passwordError && <span className="error">{passwordError}</span>}
        </div>

        <button type="submit" className="register-btn">
          Зарегистрироваться
        </button>

        <div className="login-link">
          <p>Уже зарегистрированы? <Link to="/signIn">Войти в аккаунт</Link></p>
        </div>
      </form>
    </div>
              </div>
  );
}

export default Register;