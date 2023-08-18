import React, { Component } from 'react';
import { Theme, Content } from '@carbon/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader>
          <BrowserRouter>
            <Theme theme="g100">
              <TutorialHeader />
            </Theme>
            <Content>
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/repos" element={<RepoPage />} />
              </Routes>
            </Content>
          </BrowserRouter>
        </TutorialHeader>
      </>
    );
  }
}

export default App;
