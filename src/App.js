import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import { Switch, Route } from 'react-router-dom';
import RepoPage from './content/RepoPage/RepoPage';
class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route path="/repos" component={RepoPage}></Route>
          </Switch>
        </Content>
      </>
    );
  }
}
export default App;
