import { createAsyncThunk } from "@reduxjs/toolkit";
import { add, get, remove, update } from "./todoActions";
import { TodoItem, ResponseType } from "../../types/todoTypes";

export const fetchTodos = createAsyncThunk<TodoItem[], void>(
  "todos/fetch",
  async () => {
    const res = await get();
    return res.data;
  }
);

export const addTodo = createAsyncThunk<TodoItem, Omit<TodoItem, "_id">>(
  "todos/add",
  async (todo) => {
    const res = await add(todo);
    return res.data;
  }
);

export const updateTodos = createAsyncThunk<
  ResponseType,
  Partial<TodoItem>
>("todos/update", async (change) => {
  const res = await update(change);
  return res.data;
});

export const deleteTodo = createAsyncThunk<TodoItem, string | undefined>(
  "todos/delete",
  async (id) => {
    const res = await remove(id);
    return res.data;
  }
);
