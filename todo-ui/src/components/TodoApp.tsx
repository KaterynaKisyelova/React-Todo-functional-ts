import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Todos from "./todos/Todos";
import styles from "./Todo.module.css";
import { AppDispatch, RootState } from "../store/store";
import { fetchTodos } from "../store/actions/asyncThunk";
import toast, { Toaster } from "react-hot-toast";

function TodoApp() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector(
    (state: RootState) => state.todoReducer
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    if (error !== undefined) {
      toast.error(error);
    }
  }, [error]);

  const jsx = isLoading ? (
    <div className={styles.load}>Loading...</div>
  ) : (
    <>
      <div className={styles.todoapp}>
        <Header />
        <Todos />
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </>
  );

  return jsx;
}

export default TodoApp;
