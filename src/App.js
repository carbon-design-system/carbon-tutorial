import React, { Component } from 'react';
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import { Theme, Content } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Routes>
            <Route path="/repos" element={<RepoPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/" element={<RepoPage />} />
          </Routes>
        </Content>
      </>
    );
  }
}

export default App;
