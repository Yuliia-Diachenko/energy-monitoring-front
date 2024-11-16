import { Routes, Route } from "react-router-dom";
import HomePage from '../../page/HomePage/HomePage.jsx';
import AnalysticsPage from '../../page/AnalysticsPage/AnalyticsPage.jsx';
import NotFoundPage from "../../page/NoteFoundPage/NotFoundPage.jsx";
import Layout from "../Layout/Layout";
// import css from './App.module.css';

function App() {

  return (

    <Layout >
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/analystics" element={<AnalysticsPage />}/>      
        <Route path="*" element={<NotFoundPage />} />    
      </Routes>
    </Layout>
    
  )
}

export default App