import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';

//import content pages
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    //return Tutorial Header with button
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/repos" element={<RepoPage />} />
          </Routes>
        </Content>
      </>
    );
  }
}

export default App;
