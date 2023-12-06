import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the todo input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/add new todo/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders the submit button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /submit/i });
  expect(buttonElement).toBeInTheDocument();
});

test('renders the todo list', () => {
  render(<App />);
  const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();
});
