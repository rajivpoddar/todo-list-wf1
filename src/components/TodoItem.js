import React from 'react';

function TodoItem({ todo, onComplete, onDelete }) {
  const itemStyle = todo.isCompleted ? { textDecoration: 'line-through' } : {};

  return (
    <li className='todo-item' style={itemStyle}>
      <p className='todo-text'>{todo.text}</p>
      <div className='todo-actions'>
        <button className='action-button edit' aria-label='complete' onClick={() => onComplete(todo.text)}>&#x2713;</button>
        <button className='action-button delete' aria-label='delete' onClick={() => onDelete(todo.text)}>&#x2715;</button>
      </div>
    </li>
  );
}

export default TodoItem;