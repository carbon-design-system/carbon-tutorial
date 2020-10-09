import React, { Component } from 'react';
import { Button, Content } from 'carbon-components-react';
import './app.scss';
import TutorialHeader from './TutorialHeader/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Content/LandingPage';
import RepoPage from './Content/RepoPage';

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
