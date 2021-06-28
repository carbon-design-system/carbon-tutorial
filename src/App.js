import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
<<<<<<< HEAD


=======
>>>>>>> fea887c33a67a15dd0ecc984051177a8fc36a7b0

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
=======
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
>>>>>>> fea887c33a67a15dd0ecc984051177a8fc36a7b0
        </Content>
      </>
    );
  }
}


export default App;
