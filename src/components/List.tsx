import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store/index';
import { todoRemove } from '@/store/reducers';
import { DivStyle, UlStyle, LiStyle } from '@/styles/elementStyle';

function List() {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(todoRemove({ id }));
  };

  return (
    <DivStyle>
      <UlStyle>
        {todos.map(todo => (
          <LiStyle key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemove(todo.id)}>Delete</button>
          </LiStyle>
        ))}
      </UlStyle>
    </DivStyle>
  );
}

export default List;
