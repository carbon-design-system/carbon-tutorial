import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Header', () => {
  it('changes path to repo page', () => {
    const root = document.createElement('div');
    const header = document.createElement('header');
    const main = document.createElement('main');
    root.appendChild(header);
    root.appendChild(main);
    ReactDOM.render(<App />, root);
    ReactDOM.unmountComponentAtNode(root);
  });
});
