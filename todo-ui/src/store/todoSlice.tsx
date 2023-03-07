import { createSlice } from "@reduxjs/toolkit";
import { TodoItem, TotoSliceState, ResponseType } from "../types/todoTypes";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  updateTodos,
} from "./actions/asyncThunk";

const initialState: TotoSliceState = {
  list: [],
  isLoading: false,
  error: undefined,
};

function isTodoItem(payload: ResponseType): payload is TodoItem {
  return (payload as TodoItem)._id !== undefined;
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.list.push(action.payload);
      state.error = undefined;
    });

    builder.addCase(addTodo.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(updateTodos.fulfilled, (state, { payload }) => {
      if (isTodoItem(payload)) {
        state.list = state.list.map((item) =>
          item._id === payload._id ? payload : item
        );
      } else {
        state.list = state.list.map((todo) => {
          const newTodo = payload.find((item) => item._id === todo._id);
          return newTodo ? newTodo : todo;
        });
      }
      state.error = undefined;
    });

    builder.addCase(updateTodos.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      if (isTodoItem(payload)) {
        state.list = state.list.filter((item) => item._id !== payload._id);
      } else {
        state.list = payload;
      }

      state.error = undefined;
    });

    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default todoSlice.reducer;
