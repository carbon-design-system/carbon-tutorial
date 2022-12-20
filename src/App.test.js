import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>
  );
});
