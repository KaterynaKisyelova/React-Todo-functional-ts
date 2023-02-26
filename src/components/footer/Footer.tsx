import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clear } from "../../store/todoSlice";
import styles from "./Footer.module.css";
import { AppDispatch, RootState } from "../../store/store";

function Footer() {
  const [activeCount, setActiveCount] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todoReducer.list);

  useEffect(() => {
    setActiveCount(todos.filter((todo) => todo.completed === false).length);
    setHasCompleted(todos.some((todo) => todo.completed === true));
  }, [todos]);

  function onClearBtnClick() {
    dispatch(clear());
  }

  return (
    <footer className={styles.footer}>
      <span className={styles.footer__count}>{`${activeCount} ${
        activeCount === 1 ? "item left" : "items left"
      }`}</span>
      <ul className={styles.footer__filters}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.selected}` : styles.link
            }
            to="/"
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.selected}` : styles.link
            }
            to="/active"
          >
            Active
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.selected}` : styles.link
            }
            to="/completed"
          >
            Completed
          </NavLink>
        </li>
      </ul>
      <button
        className={
          hasCompleted
            ? `${styles.footer__btn_clear} ${styles.active}`
            : styles.footer__btn_clear
        }
        onClick={onClearBtnClick}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
