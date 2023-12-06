import React from 'react';

function TodoButton({ onAddTodo }) {
  return (
    <button
      className='todo-button'
      onClick={onAddTodo}
    >
      Submit
    </button>
  );
}

export default TodoButton;