import './app.scss';
import React, { Component } from 'react';
import RepoPage from './content/RepoPage';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import TutorialHeader from './components/TutorialHeader';
import { Content } from 'carbon-components-react/lib/components/UIShell';

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
