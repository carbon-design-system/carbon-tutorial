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
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
