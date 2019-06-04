import React, { Component } from 'react';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell'; //DC: Content is nice. It moves things within it underneath it correctly spacially
// import Button from 'carbon-components-react/lib/components/Button/Button';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          Hello Carbon! Well, not quite yet. This is the starting point for the
          Carbon tutorial.
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
