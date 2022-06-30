import React, { Component } from 'react';
import { Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import { g100 } from '@carbon/themes';
import logo from './logo.svg';
import './App.scss';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <g100>
          <TutorialHeader />
        </g100>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
