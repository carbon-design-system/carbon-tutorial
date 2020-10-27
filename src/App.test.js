import React from 'react';
import LandingPage from './content/LandingPage';
import { shallow } from 'enzyme';

describe('React Step 5 Tests', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });

  const testForManifestFile = require('../manifest.yml');

  it('app contains a manifest file', () => {
    expect(testForManifestFile).toBe('manifest.yml');
  });
});
