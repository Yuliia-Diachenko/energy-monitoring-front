import Layout from "../Layout/Layout";
import css from './App.module.css';
import Chart from "../Chart/Chart";
import Doughnuts from "../Doughtnuts/Doughtnut.jsx";
import Lines from "../Lines/Lines.jsx";

function App() {

  return (
    <>
    <Layout >
      <main className={css.body}>
      <Chart />
      <Doughnuts/>
      <Lines /> 
      </main>
    </Layout>
    </>
  )
}

export default App