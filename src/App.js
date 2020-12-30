import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './contents/LandingPage';
import RepoPage from './contents/RepoPage';
import ProfilePage from './contents/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
