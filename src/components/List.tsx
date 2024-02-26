import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store/index';
import { todoRemove } from '@/store/reducers';

function List() {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(todoRemove({ id }));
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemove(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
