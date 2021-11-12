import React from 'react';
import RepoPage from './content/RepoPage';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('React Step 2 Tests', () => {
  it('renders without crashing', () => {
    shallow(<RepoPage />);
  });

  const wrapper = shallow(<RepoPage />);
  it('contains a RepoTable', () => {
    expect(wrapper.find('RepoTable').length).toBe(1);
  });
});
