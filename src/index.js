import React from 'react';
import "./assets/css/bootstrap.css";
import "./assets/css/theme.css";
import "./assets/css/maicons.css";
import "./assets/css/io.css";
import 'animate.css';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


