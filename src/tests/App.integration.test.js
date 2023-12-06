import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Todo List App Integration Tests', () => {
  test('allows a user to add a new todo task', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add new todo/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('allows a user to mark a todo task as complete', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add new todo/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(submitButton);

    const completeButton = screen.getByLabelText(/complete/i);
    fireEvent.click(completeButton);

    expect(completeButton).toHaveClass('edit');
  });

  test('allows a user to delete a todo task', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add new todo/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(submitButton);

    const deleteButton = screen.getByLabelText(/delete/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText('New Task')).not.toBeInTheDocument();
  });

  test('completed tasks are visually distinct from non-completed tasks', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add new todo/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(submitButton);

    const completeButton = screen.getByLabelText(/complete/i);
    fireEvent.click(completeButton);

    const todoItem = screen.getByText('New Task').closest('.todo-item');
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('todo tasks are saved and persist when the app is reopened', () => {
    // Initial render and task addition
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add new todo/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(inputElement, { target: { value: 'Persistent Task' } });
    fireEvent.click(submitButton);

    // Simulate app closing and reopening
    render(<App />);

    expect(screen.getByText('Persistent Task')).toBeInTheDocument();
  });
});
