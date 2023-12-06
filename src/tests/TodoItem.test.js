import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

test('renders a todo item with text', () => {
  const todo = { text: 'Sample Todo', isCompleted: false };
  render(<TodoItem todo={todo} />);
  const todoText = screen.getByText(todo.text);
  expect(todoText).toBeInTheDocument();
});

test('todo item has a checkmark button to mark it as complete', () => {
  const todo = { text: 'Sample Todo', isCompleted: false };
  render(<TodoItem todo={todo} />);
  const checkmarkButton = screen.getByRole('button', { name: /complete/i });
  expect(checkmarkButton).toBeInTheDocument();
});

test('clicking the checkmark button marks the item as complete', () => {
  const todo = { text: 'Sample Todo', isCompleted: false };
  const onComplete = jest.fn();
  render(<TodoItem todo={todo} onComplete={onComplete} />);
  const checkmarkButton = screen.getByRole('button', { name: /complete/i });
  fireEvent.click(checkmarkButton);
  expect(onComplete).toHaveBeenCalledWith(todo.text);
});

test('todo item has a delete button to remove it', () => {
  const todo = { text: 'Sample Todo', isCompleted: false };
  render(<TodoItem todo={todo} />);
  const deleteButton = screen.getByRole('button', { name: /delete/i });
  expect(deleteButton).toBeInTheDocument();
});

test('clicking the delete button removes the item', () => {
  const todo = { text: 'Sample Todo', isCompleted: false };
  const onDelete = jest.fn();
  render(<TodoItem todo={todo} onDelete={onDelete} />);
  const deleteButton = screen.getByRole('button', { name: /delete/i });
  fireEvent.click(deleteButton);
  expect(onDelete).toHaveBeenCalledWith(todo.text);
});