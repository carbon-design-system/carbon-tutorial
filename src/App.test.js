import React from 'react';
import LandingPage from './content/LandingPage';
import { shallow } from 'enzyme';

describe('React Step 4 Tests', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });

  const wrapper = shallow(<LandingPage />);
  it('contains an InfoSection component', () => {
    expect(wrapper.find('InfoSection').length).toBe(1);
  });
});
