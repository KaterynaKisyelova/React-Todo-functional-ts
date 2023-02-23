import { createSlice } from "@reduxjs/toolkit";

const TODOS_KEY = "todos";

type TodoItem = {
  title: string;
  completed: boolean;
  id: string;
};

const initialState: { list: TodoItem[] } = {
  list: [],
};

function saveToLS(todos: TodoItem[]) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function getFromLS() {
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
      state.list = getFromLS();
    },

    add: (state, action) => {
      state.list.push(action.payload);
      saveToLS(state.list);
    },

    remove: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
      saveToLS(state.list);
    },

    edit: (state, action) => {
      state.list = state.list.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.changes }
          : item
      );
      saveToLS(state.list);
    },

    toggleAll: (state) => {
      if (state.list.some((todo) => todo.completed === false)) {
        state.list = state.list.map((todo) =>
          todo.completed === false ? { ...todo, completed: true } : todo
        );

        saveToLS(state.list);
        return;
      }

      state.list.forEach((todo) => (todo.completed = false));

      saveToLS(state.list);
    },

    clear: (state) => {
      state.list = state.list.filter((todo) => todo.completed !== true);
      saveToLS(state.list);
    },
  },
});

export const { get, edit, toggleAll, clear, add, remove } = todoSlice.actions;

export default todoSlice.reducer;
