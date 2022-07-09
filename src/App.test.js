import React from 'react';
import RepoPage from './content/RepoPage';
import { shallow } from 'enzyme';
import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es7.object.values';

describe('React Step 2 Tests', () => {
  it('renders without crashing', () => {
    shallow(<RepoPage />);
  });

  const wrapper = shallow(<RepoPage />);
  it('contains a RepoTable', () => {
    expect(wrapper.find('RepoTable').length).toBe(1);
  });
});
