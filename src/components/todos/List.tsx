import Item from "./Item";
import styles from "./List.module.css";
import { TodoItem } from "../../types/todoTypes";

type Props = {
  list: TodoItem[];
};

function List({ list }: Props) {
  return (
    <ul className={styles.list__content}>
      {list.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default List;
