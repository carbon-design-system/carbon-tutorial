import React, { Component } from 'react';
import TutorialHeader from './components/TutorialHeader';
import './App.scss';
import { Button, Content } from 'carbon-components-react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Button>Button</Button>
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
