import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormStyle, InputField, ButtonStyle } from '@/styles/elementStyle';

import { todoAdded } from '@/store/reducers';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }

    dispatch(todoAdded({
      id: Date.now(),
      text,
      completed: false
    }));

    setText('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <InputField type="text" value={text} onChange={e => setText(e.target.value)} />
      <ButtonStyle type="submit">Add</ButtonStyle>
    </FormStyle>
  );
}

export default AddTodo;
