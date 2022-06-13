import React from 'react';
import HomePage from "./pages/HomePage";
import PageTop from "./component/PageTop/PageTop";
import TopNavigation from "./component/TopNavigation/TopNavigation";
import AboutDescription from "./component/AboutDescription/AboutDescription";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";
function App() {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
