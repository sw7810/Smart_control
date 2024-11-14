// components/Login.js
import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">welcome</h2>
      <p className="login-subtitle">smart_control_system</p>
      
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="id"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        
        <button type="submit" className="login-button">Sign Up</button>
        
        <div className="login-links">
          <a href="/forgot-password">forget password?</a>
          <span> / </span>
          <a href="/register">create account</a>
        </div>
        
        <div className="login-or-separator">or</div>
        
        <button className="login-social-button">continue with google</button>
        <button className="login-social-button">continue with kakao</button>
      </form>
    </div>
  );
};

export default Login;
