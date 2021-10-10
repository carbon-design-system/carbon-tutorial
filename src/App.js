import React, { Component } from 'react';
import './App.scss';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { Route, Switch } from 'react-router-dom';

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
