import React from 'react';
import RepoPage from './content/RepoPage';
import { render, screen } from '@testing-library/react';

describe('React Step 2 Tests', () => {
  it('renders without crashing', () => {
    render(<RepoPage />);
  });

  // const wrapper = shallow(<RepoPage />);
  // it('contains a RepoTable', () => {
  //   expect(wrapper.find('RepoTable').length).toBe(1);

  //   render(<App />);
  //   expect(screen.getByText('Carbon Tutorial')).toBeInTheDocument();
  // });
});
