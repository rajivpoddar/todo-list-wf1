import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from '../components/TodoInput';

test('renders the todo input field', () => {
  render(<TodoInput />);
  const inputElement = screen.getByPlaceholderText(/add new todo/i);
  expect(inputElement).toBeInTheDocument();
});

test('allows the user to enter text', () => {
  render(<TodoInput />);
  const inputElement = screen.getByPlaceholderText(/add new todo/i);
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  expect(inputElement.value).toBe('New Todo');
});