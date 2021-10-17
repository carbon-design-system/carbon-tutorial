import { Content } from 'carbon-components-react';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </React.Fragment>
    );
  }
}

export default App;
