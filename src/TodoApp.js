import { get } from "./store/todoSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Todos from "./components/todos/Todos";
import styles from "./Todo.module.css";

function TodoApp() {
  const dispatch = useDispatch();

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
