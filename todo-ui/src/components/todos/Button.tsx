import { useDispatch } from "react-redux";
import styles from "./Button.module.css";
import { AppDispatch } from "../../store/store";
import { deleteTodo } from "../../store/actions/asyncThunk";

type Props = {
  id: string;
};

function Button(props: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      className={styles.delete}
      onClick={() => dispatch(deleteTodo(props.id))}
    ></button>
  );
}

export default Button;
