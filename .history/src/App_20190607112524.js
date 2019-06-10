import React, { Component } from 'react';
import './app.scss';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <div>
            Hello Carbon! Well, not quite yet. This is the starting point for
            the Carbon tutorial.
          </div>
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
