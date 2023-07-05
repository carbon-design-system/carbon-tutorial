import React from 'react';
import LandingPage from './content/LandingPage';
import { render, screen } from '@testing-library/react';

describe('React Step 4 Tests', () => {
  it('renders without crashing', () => {
    render(<LandingPage />);
  });

  it('contains InfoSection component content', () => {
    render(<LandingPage />);
    expect(
      screen.getByText(
        'Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences.'
      )
    ).toBeInTheDocument();
  });
});
