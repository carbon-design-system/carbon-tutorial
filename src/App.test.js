import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
describe('React Step 1 Tests', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  const wrapper = shallow(<App />);
  it('contains a TutorialHeader', () => {
    expect(wrapper.find('TutorialHeader').length).toBe(1);
  });
});
