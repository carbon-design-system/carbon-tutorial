import React from 'react';
import LandingPage from './content/LandingPage';
import { render } from '@testing-library/react';

describe('React Step 5 Tests', () => {
  it('renders without crashing', () => {
    render(<LandingPage />);
  });

  const testForIndexBuildFile = require('../build/index.html');

  it('app contains a build folder', () => {
    expect(testForIndexBuildFile).toBe('index.html');
  });
});
