import React, { Component } from 'react';
<<<<<<< Updated upstream
=======
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
>>>>>>> Stashed changes

class App extends Component {
  render() {
    return (
<<<<<<< Updated upstream
      <div>
        Hello Carbon! Well, not quite yet. This is the starting point for the
        Carbon tutorial.
      </div>
=======
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
>>>>>>> Stashed changes
    );
  }
}

export default App;
