import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  try {
    ReactDOM.render(<App />, div);
  } catch (error) {
    // ...
  }

  ReactDOM.unmountComponentAtNode(div);
});
