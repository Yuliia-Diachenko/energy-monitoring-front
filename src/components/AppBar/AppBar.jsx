import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  return (

    <header className={css.header}>
    <img src="/lightening.jpg" alt="logo" width='50' className={css.logo}/>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}    
    </header>

  );
}