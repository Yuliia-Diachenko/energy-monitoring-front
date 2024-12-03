import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import Layout from "../Layout/Layout";
import { lazy, Suspense, useEffect } from "react";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const AnalysticsPage = lazy(() => import("../../pages/AnalysticsPage/AnalyticsPage.jsx"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const NotFoundPage = lazy(() => import( "../../pages/NotFoundPage/NotFoundPage.jsx"));

import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  if (isRefreshing) {
    return null;
  }
  return (

    <Layout className={css.body}>
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RestrictedRoute component = {<RegistrationPage />} redirectTo = {"/"}/>} />
        <Route path="/login" element={<RestrictedRoute component = {<LoginPage />} redirectTo = {"/analystics"}/>} />
        <Route path="/analystics" element={<AnalysticsPage />}/>      
        <Route path="*" element={<NotFoundPage />} />    
      </Routes>
      </Suspense>
    </Layout>
    
  )
}

export default App