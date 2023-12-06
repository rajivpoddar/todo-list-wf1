import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders an empty todo list when there are no tasks', () => {
  render(<TodoList todos={[]} />);
  const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();
  expect(listElement).toBeEmptyDOMElement();
});

test('renders a list with todo items', () => {
  const todos = ['Task 1', 'Task 2'];
  render(<TodoList todos={todos} />);
  const items = screen.getAllByRole('listitem');
  expect(items.length).toBe(todos.length);
});

test('todo items should contain the correct text', () => {
  const todos = ['Task 1', 'Task 2'];
  render(<TodoList todos={todos} />);
  todos.forEach((todo, index) => {
    expect(screen.getByText(todo)).toBeInTheDocument();
  });
});