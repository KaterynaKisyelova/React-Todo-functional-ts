import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodos } from "../../store/actions/asyncThunk";
import { AppDispatch } from "../../store/store";
import Button from "./Button";
import styles from "./ItemContent.module.css";

type Props = {
  title: string;
  completed: boolean;
  id: string;
  isOver: boolean;
};

function ItemContent({ title, id, completed, isOver }: Props) {
  const [isDone, setIsDone] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setIsDone(completed);
  }, [completed]);

  function onCheckboxChange() {
    const newTodo = {
      title,
      _id: id,
      completed: !isDone,
    };

    setIsDone(!isDone);
    dispatch(updateTodos(newTodo));
  }

  return (
    <div>
      <input
        className={styles.toggle}
        type="checkbox"
        checked={isDone}
        onChange={onCheckboxChange}
      />
      <label
        className={
          isDone
            ? `${styles.item__text} ${styles.completed}`
            : styles.item__text
        }
      >
        {title}
      </label>
      {isOver ? <Button id={id} /> : null}
    </div>
  );
}

export default ItemContent;
