import { useState } from "react";
import { useDispatch } from "react-redux";
import { edit, remove } from "../../store/todoSlice";
import styles from "./EditInput.module.css";

type Props = {
  title: string;
  id: string;
};

function EditInput({ title, id }: Props) {
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

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
      dispatch(remove({ id: id }));
    }

    dispatch(edit({ id: id, changes: { title: newTitle } }));
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
