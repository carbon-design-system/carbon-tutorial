import React, { Component } from 'react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
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
        </Content>
      </>
    );
  }
}

export default App;
