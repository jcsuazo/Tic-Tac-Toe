import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tic Tac Toe/i);
  expect(linkElement).toBeInTheDocument();
});
