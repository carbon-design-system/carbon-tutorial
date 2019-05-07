// test file
import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../LandingPage';

describe('Landing Page', () => {
  it('exists', () => {
    expect(shallow(<LandingPage />)).toMatchSnapshot();
  });
});
