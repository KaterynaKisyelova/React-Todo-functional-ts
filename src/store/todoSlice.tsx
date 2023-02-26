import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  EditPayload,
  IdPayload,
  TodoItem,
  TotoSliceState,
} from "../types/todoTypes";

const TODOS_KEY = "todos";

const initialState: TotoSliceState = {
  list: [],
};

function saveToLocalStorage(todos: TodoItem[]) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function getFromLocalStorage() {
  const todos = localStorage.getItem(TODOS_KEY);

  if (todos) {
    return JSON.parse(todos);
  }

  return [];
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    get: (state) => {
      state.list = getFromLocalStorage();
    },

    add: (state, action: PayloadAction<TodoItem>) => {
      state.list.push(action.payload);
      saveToLocalStorage(state.list);
    },

    remove: (state, action: PayloadAction<IdPayload>) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
      saveToLocalStorage(state.list);
    },

    edit: (state, action: PayloadAction<EditPayload>) => {
      state.list = state.list.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.changes }
          : item
      );
      saveToLocalStorage(state.list);
    },

    toggleAll: (state) => {
      if (state.list.some((todo) => todo.completed === false)) {
        state.list = state.list.map((todo) =>
          todo.completed === false ? { ...todo, completed: true } : todo
        );

        saveToLocalStorage(state.list);
        return;
      }

      state.list.forEach((todo) => (todo.completed = false));

      saveToLocalStorage(state.list);
    },

    clear: (state) => {
      state.list = state.list.filter((todo) => todo.completed !== true);
      saveToLocalStorage(state.list);
    },
  },
});

export const { get, edit, toggleAll, clear, add, remove } = todoSlice.actions;

export default todoSlice.reducer;
