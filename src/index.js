import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
