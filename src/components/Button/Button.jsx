import css from "./Button.module.css";

export default function Button({ children }) {

  return <button type="submit" className={css.button}>{children}</button>;
  
}