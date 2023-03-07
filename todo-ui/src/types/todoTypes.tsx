export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
export interface TodoItem {
  title: string;
  completed: boolean;
  _id: string;
}

export type TotoSliceState = {
  list: TodoItem[];
  isLoading: boolean;
  error: string | undefined;
};

export type IdPayload = {
  id: string;
};

export type EditPayload = {
  id: string;
  changes: { title: string } | { completed: boolean };
};

export type ResponseType = TodoItem | TodoItem[];
