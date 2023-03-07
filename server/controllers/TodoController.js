import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completeAllTodos,
  deleteManyTodos,
} from "../TodoService.js";

export const get = async (_, res) => {
  try {
    const todos = await getTodos();
    res.json({ data: todos });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const create = async (req, res) => {
  try {
    const todo = await createTodo(req.body);
    res.json({ data: todo });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const update = async (req, res) => {
  try {
    const changes = req.body;

    if (changes._id) {
      const updatedRes = await updateTodo(changes._id, changes);

      res.json({ data: updatedRes });
      return;
    }

    const updatedRes = await completeAllTodos(changes);
    res.json({ data: updatedRes });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const remove = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(_id);

    if (_id) {
      const todo = await deleteTodo(_id);
      
      res.json({ data: todo });
      return;
    }

    const todos = await deleteManyTodos();
    res.json({ data: todos });
  } catch (e) {
    res.status(500).json(e);
  }
};
