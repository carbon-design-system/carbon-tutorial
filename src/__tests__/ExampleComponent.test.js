import React from 'react';
import { ExampleComponent } from '../utils/ExampleComponent';
import { render, fireEvent, screen } from '@testing-library/react';

// Test a component.

test("Test clicking ExampleComponent's buttons", () => {
  render(<ExampleComponent />);
  // Check that span with default value exists.
  screen.getByText(/Value is 100/i);
  // Get buttons
  const addButton = screen.getByText('add');
  const removeButton = screen.getByText('remove');
  // Test click on add button
  fireEvent.click(addButton);
  expect(screen.queryByText(/Value is 100/i)).toBeNull();
  screen.getByText(/Value is 101/i);
  // Test another click on add button
  fireEvent.click(addButton);
  expect(screen.queryByText(/Value is 100/i)).toBeNull();
  expect(screen.queryByText(/Value is 101/i)).toBeNull();
  screen.getByText(/Value is 102/i);
  // Test click on remove button
  fireEvent.click(removeButton);
  fireEvent.click(removeButton);
  fireEvent.click(removeButton);
  fireEvent.click(removeButton);
  fireEvent.click(removeButton);
  screen.getByText(/Value is 97/i);
});
