import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {

  return (    
 
    <nav className={css.container}>    

      <div className={css.groopNav}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/analystics">
            Analystics
          </NavLink>
          </div>
        
    </nav>
  
  );
}