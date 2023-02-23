import { useDispatch } from "react-redux";
import { toggleAll } from "../../store/todoSlice";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "./Todos.module.css";

function Todos() {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  function onCheckboxChange() {
    setIsChecked(!isChecked);
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
