import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import Landing from './content/LandingPage';
import Repo from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/repos" component={Repo} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
