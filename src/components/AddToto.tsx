import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todoAdded } from '@/store/reducers';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch(todoAdded({
      id: Date.now(),
      text,
      completed: false
    }));

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
