// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Control from './components/Control';
import Schedule from './components/Schedule';
import Security from './components/Security';
import Analysis from './components/Analysis';
import Login from './components/Login';
import './App.css';

function App() {
  // localStorage에서 'user'를 확인하여 로그인 상태 체크
  const isAuthenticated = !!localStorage.getItem('user'); // 'user'가 있으면 로그인된 상태

  return (
    <Router>
      <Routes>
        {/* 로그인되지 않은 상태에서는 Login 페이지로 리다이렉트 */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        
        {/* 로그인된 상태에서만 대시보드와 다른 페이지 접근 */}
        <Route path="/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/Control" element={isAuthenticated ? <Control /> : <Navigate to="/" />} />
        <Route path="/Schedule" element={isAuthenticated ? <Schedule /> : <Navigate to="/" />} />
        <Route path="/Security" element={isAuthenticated ? <Security /> : <Navigate to="/" />} />
        <Route path="/Analysis" element={isAuthenticated ? <Analysis /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
