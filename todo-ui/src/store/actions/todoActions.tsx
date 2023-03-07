import { RequestMethod, TodoItem } from "../../types/todoTypes";

const TODOS_URL = "http://localhost:5000/todos/";

function makeRequest(
  id: string,
  method: RequestMethod,
  content?: Partial<TodoItem> | undefined
) {
  return fetch(`${TODOS_URL}${id ? id : ""}`, {
    method,
    headers: { "Content-type": "application/json" },
    body: content ? JSON.stringify(content) : undefined,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("An error occurred", { cause: res });
  });
}

export function get() {
  return makeRequest("", RequestMethod.GET).catch(() => {
    throw new Error("Todos are not found");
  });
}

export function add(todo: Omit<TodoItem, "_id">) {
  return makeRequest("", RequestMethod.POST, todo).catch(() => {
    throw new Error("Failed to add a new todo");
  });
}

export function update(change: Partial<TodoItem>) {
  return makeRequest("", RequestMethod.PUT, change).catch(() => {
    throw new Error("Failed to update the todo");
  });
}

export function remove(_id?: string) {
  return makeRequest("", RequestMethod.DELETE, _id ? { _id } : undefined).catch(
    () => {
      throw new Error("Failed to delete the todo");
    }
  );
}
