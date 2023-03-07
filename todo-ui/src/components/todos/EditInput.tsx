import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodos } from "../../store/actions/asyncThunk";
import { AppDispatch } from "../../store/store";
import styles from "./EditInput.module.css";
import { TodoItem as Props } from "../../types/todoTypes";

function EditInput({ title, _id, completed }: Props) {
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch<AppDispatch>();

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTitle(e.target.value);
  }

  function onInputKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const input = e.target as HTMLInputElement;
      input.blur();
    }
  }

  function onInputBlur() {
    if (!newTitle.trim()) {
      dispatch(deleteTodo(_id));
      return;
    }

    const newTodo = {
      _id,
      completed,
      title: newTitle,
    };

    dispatch(updateTodos(newTodo));
  }

  return (
    <input
      className={styles.edit}
      value={newTitle}
      onChange={onInputChange}
      onKeyDown={onInputKeydown}
      onBlur={onInputBlur}
      autoFocus
    />
  );
}

export default EditInput;
