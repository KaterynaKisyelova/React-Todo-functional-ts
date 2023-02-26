export type TodoItem = {
  title: string;
  completed: boolean;
  id: string;
};

export type TotoSliceState = { list: TodoItem[] };

export type IdPayload = {
  id: string;
};

export type EditPayload = {
  id: string;
  changes: { title: string } | { completed: boolean };
};
