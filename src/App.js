import React, { Component } from 'react';
import './app.scss';
import { Button } from 'carbon-components-react';
import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';


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
