/* eslint-disable import/extensions */
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement | DocumentFragment);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
