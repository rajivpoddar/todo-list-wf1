import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onComplete, onDelete }) {
  return (
    <ul className='todo-list'>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;