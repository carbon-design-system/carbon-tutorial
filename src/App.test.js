import React from 'react';
import RepoPage from './content/RepoPage';
import { shallow } from 'enzyme';

describe('React Step 2 Tests', () => {
  it('renders without crashing', () => {
    shallow(<RepoPage />);
  });
});
