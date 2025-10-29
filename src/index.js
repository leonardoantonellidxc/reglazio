import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1️⃣ Import principali di librerie esterne (prima i CSS globali)
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js';

// 2️⃣ Import dei tuoi stili personalizzati (DEVONO venire dopo)
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
