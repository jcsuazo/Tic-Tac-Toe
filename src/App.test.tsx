import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tic Tac Toe/i);
  expect(linkElement).toBeInTheDocument();
});

test("should display the winner", async () => {
  userEvent.setup()
  render(<App />);
  await userEvent.click(screen.getByTestId("row_0_cell_0"))
  await userEvent.click(screen.getByTestId("row_1_cell_1"))
  await userEvent.click(screen.getByTestId("row_0_cell_1"))
  await userEvent.click(screen.getByTestId("row_1_cell_2"))
  await userEvent.click(screen.getByTestId("row_0_cell_2"))
  
  const winnerElemnet = screen.getByText(/The winner is/i,)
  const gameOverElement = screen.getByText(/Game over/i,)
  expect(winnerElemnet).toBeInTheDocument();
  expect(gameOverElement).toBeInTheDocument();
  

})
