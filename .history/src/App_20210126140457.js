import React, { Component } from 'react';
import './app.scss';
import { Button } from 'carbon-components-react';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
