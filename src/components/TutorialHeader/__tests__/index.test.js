// test file
import React from 'react';
import { shallow } from 'enzyme';
import TutorialHeader from '../TutorialHeader';

describe('Header', () => {
  it('exists', () => {
    const wrapper = shallow(<TutorialHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
