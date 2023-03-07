import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "./Todos.module.css";
import { AppDispatch, RootState } from "../../store/store";
import { updateTodos } from "../../store/actions/asyncThunk";

function Todos() {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todoReducer.list);

  function onCheckboxChange(e: React.ChangeEvent) {
    const input = e.target as HTMLInputElement;
    const hasIncompleted = todos.find((todo) => todo.completed === false);

    setIsChecked(input.checked);
    dispatch(updateTodos({ completed: !hasIncompleted }));
  }

  return (
    <main className={styles.list}>
      <label className={styles.list__toggle_all_label}>
        <input
          className={styles.list__toggle_all}
          type="checkbox"
          onChange={onCheckboxChange}
          checked={isChecked}
        />
      </label>
      <Outlet />
    </main>
  );
}

export default Todos;
