import React from 'react';
import RepoPage from './content/RepoPage';
import { render } from '@testing-library/react';

it('renders a table with pagination', () => {
  const { container } = render(<RepoPage />);
  expect(container.getElementsByClassName('.cds--pagination').length).toBe(1);
});
