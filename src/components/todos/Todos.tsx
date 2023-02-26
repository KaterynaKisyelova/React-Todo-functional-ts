import { useDispatch } from "react-redux";
import { toggleAll } from "../../store/todoSlice";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "./Todos.module.css";
import { AppDispatch } from "../../store/store";

function Todos() {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  function onCheckboxChange(e: React.ChangeEvent) {
    const input = e.target as HTMLInputElement;

    setIsChecked(input.checked);
    dispatch(toggleAll());
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
