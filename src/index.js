import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
