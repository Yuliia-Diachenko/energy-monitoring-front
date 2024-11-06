import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <section className={css.heroSection}>
    <div className={css.container}>
      <PageTitle className={css.herroTitle}>
         Energy monitoring for Power Plant generation
      </PageTitle>
      <p className={css.prg}>
          You can be able to try simple analysis tools
      </p>
      <Link to="/catalog"><Button type="button">Try Now</Button></Link>
      </div>
      </section>
  );
}