import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        className='todo-input'
        type='text'
        placeholder='Add new todo'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className='todo-button'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default TodoInput;