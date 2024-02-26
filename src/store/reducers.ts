import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    todoAdded: (state, action: PayloadAction<Todo>) => {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoRemove: (state, action: PayloadAction<{id: number}>) => state.filter(todo => todo.id !== action.payload.id),
  },
});

export const { todoAdded, todoRemove } = todoSlice.actions;

export default todoSlice.reducer;
