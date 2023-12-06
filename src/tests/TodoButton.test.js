import { render, screen, fireEvent } from '@testing-library/react';
import TodoButton from '../components/TodoButton';

test('renders the submit button', () => {
  render(<TodoButton />);
  const buttonElement = screen.getByRole('button', { name: /submit/i });
  expect(buttonElement).toBeInTheDocument();
});

test('calls the onAddTodo function when clicked', () => {
  const onAddTodo = jest.fn();
  render(<TodoButton onAddTodo={onAddTodo} />);
  const buttonElement = screen.getByRole('button', { name: /submit/i });
  fireEvent.click(buttonElement);
  expect(onAddTodo).toHaveBeenCalled();
});