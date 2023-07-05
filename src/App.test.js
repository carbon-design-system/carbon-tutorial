import React from 'react';
import RepoPage from './content/RepoPage';
import { render, screen, waitFor } from '@testing-library/react';

it('renders a table with pagination', async () => {
  const { container } = render(<RepoPage />);
  expect(container.getElementsByClassName('.cds--pagination').length).toBe(0);
  render(<RepoPage />);
  await waitFor(
    () => expect(screen.getByText('Items per page')).toBeInTheDocument(),
    {
      timeout: 2000,
    }
  );
});
