import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css'

function NotFoundPage() {
    return (
        <p className={css.container}>Sorry, page not found! Please go to <Link to="/">Home page</Link>!</p>
    )
}
export default NotFoundPage;