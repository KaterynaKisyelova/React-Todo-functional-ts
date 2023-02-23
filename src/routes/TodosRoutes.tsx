import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import List from "../components/todos/List";
import TodoApp from "../TodoApp";
import { TodoItem } from "../types/todoTypes";

function TodosRoutes() {
  const todos = useSelector(
    (state: { todoReducer: { list: TodoItem[] } }) => state.todoReducer.list
  );

  return (
    <Routes>
      <Route path="/" element={<TodoApp />}>
        <Route path="" element={<List list={todos} />} />
        <Route
          path="active"
          element={
            <List list={todos.filter((todo) => todo.completed === false)} />
          }
        />
        <Route
          path="completed"
          element={
            <List list={todos.filter((todo) => todo.completed === true)} />
          }
        />
      </Route>
    </Routes>
  );
}

export default TodosRoutes;
