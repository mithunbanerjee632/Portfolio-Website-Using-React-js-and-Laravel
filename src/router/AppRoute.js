import React, {Component, Fragment} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/service" element={<ServicePage/>}/>
                    <Route exact path="/course" element={<CoursesPage/>}/>
                    <Route exact path="/portfolio" element={<PortfolioPage/>}/>
                    <Route exact path="/contact" element={<ContactPage/>}/>
                    <Route exact path="/about" element={<AboutPage/>}/>
                </Routes>

            </Fragment>
        );
    }
}

export default AppRoute;