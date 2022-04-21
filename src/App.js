import { Content  } from 'carbon-components-react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import TutorialHeader from './components/TutorialHeader';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';


class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>

        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
        </BrowserRouter>

      </>
    );
  }
}

export default App;