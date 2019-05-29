import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { HashRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <switch>
            <Router exact path="/" Component={LandingPage} />
            <Router exact path="/repos" Component={RepoPage} />
          </switch>
        </Content>
      </>
    );
  }
}

export default App;
