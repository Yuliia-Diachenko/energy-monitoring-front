import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { IoLogOutOutline } from "react-icons/io5";

export default function UserMenu() {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome!</p>
      <IoLogOutOutline className={css.button} type="button" onClick={() => dispatch(logOut())}/>
    </div>
  );
}