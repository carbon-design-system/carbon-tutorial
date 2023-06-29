import React from 'react';
import App from './App';

import { render, screen } from '@testing-library/react';

describe('React Step 1 Tests', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('contains Carbon Tutorial heading', () => {
    render(<App />);
    expect(screen.getByText('Carbon Tutorial')).toBeInTheDocument();
  });
});
