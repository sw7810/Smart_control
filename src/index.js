// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18에서 createRoot 사용하기 위한 수정
import App from './App';
import './index.css';

// React 18에서 createRoot 사용
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
