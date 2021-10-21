import React, { Component } from 'react';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import './app.scss';

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
        </Content>
      </>
    );
  }
}

export default App;
