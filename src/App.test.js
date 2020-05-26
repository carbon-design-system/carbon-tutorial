import React from 'react';
import RepoPage from './content/RepoPage';
import { shallow } from 'enzyme';

describe('React Step 3 Tests', () => {
  it('renders without crashing', () => {
    shallow(<RepoPage />);
  });

  const wrapper = shallow(<RepoPage />);
  it('contains a Pagination component', () => {
    expect(wrapper.find('Pagination').length).toBe(1);
  });
});
