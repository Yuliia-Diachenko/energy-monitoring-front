import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (    
 
    <nav className={css.container}>    

      <div className={css.groopNav}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          {isLoggedIn && ( <NavLink className={css.link} to="/analystics">
            Analystics
          </NavLink>)}
          </div>
        
    </nav>
  
  );
}