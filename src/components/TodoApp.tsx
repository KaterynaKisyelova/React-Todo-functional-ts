import { get } from "../store/todoSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Todos from "./todos/Todos";
import styles from "./Todo.module.css";
import { AppDispatch } from "../store/store";

function TodoApp() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return (
    <div className={styles.todoapp}>
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default TodoApp;
