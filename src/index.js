import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';

<<<<<<< HEAD

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );
  
=======
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
>>>>>>> fea887c33a67a15dd0ecc984051177a8fc36a7b0

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
