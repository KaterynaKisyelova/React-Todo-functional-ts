import { useState } from "react";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addTodo } from "../../store/actions/asyncThunk";

function Header() {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  function onFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!text) {
      return;
    }

    const todo = { title: text, completed: false };

    dispatch(addTodo(todo));

    setText("");
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <header className="header">
      <form onSubmit={onFormSubmit}>
        <h1 className={styles.header__title}>todos</h1>
        <input
          className={styles.header__input}
          name="header-input"
          placeholder="What needs to be done?"
          autoFocus
          value={text}
          onChange={onInputChange}
        />
      </form>
    </header>
  );
}

export default Header;
