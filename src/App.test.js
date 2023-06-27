import React from 'react';
import LandingPage from './content/LandingPage';
import { render, screen } from '@testing-library/react';

describe('React Step 4 Tests', () => {
  it('renders without crashing', () => {
    render(<LandingPage />);
  });

  it('contains InfoSection component content', () => {
    render(<LandingPage />);
    expect(screen.getByText('The Principles')).toBeInTheDocument();
  });
});
