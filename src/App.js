import React from 'react';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import Content from 'carbon-components-react/lib/components/UIShell/Content';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <TutorialHeader />
      <Content>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/repos" element={<RepoPage />} />
        </Routes>
      </Content>
    </>
  );
};

export default App;
