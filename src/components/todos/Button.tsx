import { useDispatch } from "react-redux";
import styles from "./Button.module.css";
import { remove } from "../../store/todoSlice";

type Props = {
  id: string;
};

function Button(props: Props) {
  const dispatch = useDispatch();

  return (
    <button
      className={styles.delete}
      onClick={() => dispatch(remove({ id: props.id }))}
    ></button>
  );
}

export default Button;
