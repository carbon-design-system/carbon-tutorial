// test file
import React from 'react';
import { shallow } from 'enzyme';
import RepoPage from '../RepoPage';

describe('Landing Page', () => {
  it('exists', () => {
    expect(shallow(<RepoPage />)).toMatchSnapshot();
  });
});
