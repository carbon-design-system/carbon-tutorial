import React from 'react';
import RepoPage from './content/RepoPage';
import { render, screen } from '@testing-library/react';
describe('React Step 2 Tests', () => {
  it('renders without crashing', () => {
    render(<RepoPage />);
  });

  it('contains the repo table on the RepoPage', () => {
    render(<RepoPage />);
    expect(screen.getByText('Carbon Repositories')).toBeInTheDocument();
  });
});
