import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders an empty todo list when there are no tasks', () => {
  render(<TodoList todos={[]} onComplete={() => {}} onDelete={() => {}} />);
  const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();
  expect(listElement).toBeEmptyDOMElement();
});

test('renders a list with todo items', () => {
  const todos = [{ text: 'Task 1', isCompleted: false }, { text: 'Task 2', isCompleted: false }];
  render(<TodoList todos={todos} onComplete={() => {}} onDelete={() => {}} />);
  const items = screen.getAllByRole('listitem');
  expect(items.length).toBe(todos.length);
});

test('todo items should contain the correct text and reflect completion status', () => {
  const todos = [{ text: 'Task 1', isCompleted: true }, { text: 'Task 2', isCompleted: false }];
  render(<TodoList todos={todos} onComplete={() => {}} onDelete={() => {}} />);
  todos.forEach((todo) => {
    const todoText = screen.getByText(todo.text);
    expect(todoText).toBeInTheDocument();
    const todoItem = todoText.closest('.todo-item');
    if (todo.isCompleted) {
      expect(todoItem).toHaveStyle('text-decoration: line-through');
    } else {
      expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    }
  });
});
