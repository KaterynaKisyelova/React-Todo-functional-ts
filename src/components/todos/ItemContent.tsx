import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { edit } from "../../store/todoSlice";
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

  function onCheckboxChange(e: React.ChangeEvent) {
    const input = e.target as HTMLInputElement;

    setIsDone(input.checked);
    dispatch(edit({ id: id, changes: { completed: input.checked } }));
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
