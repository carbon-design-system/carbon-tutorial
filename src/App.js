import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react';
import './app.scss';
import RepoPage from './content/RepoPage';
import LandingPage from './content/LandingPage';
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
