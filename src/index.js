import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es7.object.values';
import './index.scss';
=======
import './index.css';
>>>>>>> 067be6a32a2e731bf13de31584b5398489d4e860
import App from './App';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
=======
ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 067be6a32a2e731bf13de31584b5398489d4e860

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
