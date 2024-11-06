import css from "./AppBar.module.css";

export default function AppBar() {
  
  return (
    <header className={css.header}>
    <img src="/lightening.jpg" alt="logo" width='50' className={css.logo}/>
    <p className={css.nameProject}>Energy Monitoring</p>
  </header>
  );
}