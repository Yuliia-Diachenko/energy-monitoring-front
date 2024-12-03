import HomePageTitle from "../../components/HomePageTitle/HomePageTitle";
import css from "./HomePage.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <section className={css.heroSection}>
    <div className={css.container}>
      <HomePageTitle className={css.herroTitle}>
         Energy monitoring for Power Plant generation
      </HomePageTitle>
      <p className={css.prg}>
          You can be able to try simple analysis tools
      </p>
      <Link to="/analystics"><Button type="button">Try Now</Button></Link>
      </div>
      </section>
  );
}