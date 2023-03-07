import Todo from "./models/Todo.js";

export const getTodos = async () => {
  return await Todo.find();
};

export const createTodo = async (todo) => {
  return await Todo.create(todo);
};

export const updateTodo = async (id, todo) => {
  return await Todo.findByIdAndUpdate(id, todo, {
    new: true,
  });
};

export const deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};

export const completeAllTodos = async (changes) => {
  const updated = await Todo.updateMany(
    changes,
    { $set: { completed: !changes.completed } },
    { multi: true }
  );

  return await Todo.find();
};

export const deleteManyTodos = async () => {
  const deleted = await Todo.deleteMany({ completed: true });

  return await Todo.find();
};
