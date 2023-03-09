import React from 'react';
import LandingPage from './content/LandingPage';
import { shallow } from 'enzyme';

describe('React Step 5 Tests', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });

  const testForIndexBuildFile = require('../build/index.html');

  it('app contains a build folder', () => {
    expect(testForIndexBuildFile).toBe('index.html');
  });
});
