/*
The react-apollo library gives us a component that we need to put at the base of our application.
Typically the best place for things that need to wrap the entire application is at the root of
the application, src/index.js
*/
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es7.object.values';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';

/* 
Next, make your client by providing a URI for the GitHub GraphQL API as well as an authorization header
using the environmental variable you added to .env.local
*/
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

/*
Now we can wrap our application with ApolloProvider.
At the same time, we’ll pass in the client we made as a prop to the ApolloProvider component.
*/
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
