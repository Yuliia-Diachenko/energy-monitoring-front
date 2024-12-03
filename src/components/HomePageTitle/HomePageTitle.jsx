import css from "./HomePageTitle.module.css";

export default function HomePageTitle({ children }) {
  return <h1 className={css.heading}>{children}</h1>;
}