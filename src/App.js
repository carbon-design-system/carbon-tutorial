import React, { Component } from 'react';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import { Button } from 'carbon-components-react';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        Hello Carbon! Well, not quite yet. This is the starting point for the
        Carbon tutorial.
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <Button>Button</Button>
      </div>
    );
  }
}

export default App;
