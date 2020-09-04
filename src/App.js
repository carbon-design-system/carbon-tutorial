import React, { Component } from 'react';
import './App.scss';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        <Content>
          <Button>Button</Button>
        </Content>
      </div>
    );
  }
}

export default App;
