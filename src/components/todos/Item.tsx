import { useState } from "react";
import EditInput from "./EditInput";
import ItemContent from "./ItemContent";
import styles from "./Item.module.css";
import { TodoItem as Props } from "../../types/todoTypes";

function Item({ title, id, completed }: Props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function onItemMouseEnter() {
    setIsMouseOver(true);
  }

  function onItemMouseLeave() {
    setIsMouseOver(false);
  }

  function onItemDoubleClick() {
    setIsEditing(true);
  }

  function onItemBlur() {
    setIsEditing(false);
  }

  return (
    <li
      className={completed ? `${styles.item} ${styles.completed}` : styles.item}
      onMouseEnter={onItemMouseEnter}
      onMouseLeave={onItemMouseLeave}
      onDoubleClick={onItemDoubleClick}
      onBlur={onItemBlur}
    >
      {isEditing ? (
        <EditInput title={title} id={id} />
      ) : (
        <ItemContent
          title={title}
          id={id}
          completed={completed}
          isOver={isMouseOver}
        />
      )}
    </li>
  );
}

export default Item;
