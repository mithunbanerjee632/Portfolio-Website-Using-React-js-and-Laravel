import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import AboutDescription from "../component/AboutDescription/AboutDescription";
import Footer from "../component/Footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pagetitle="About Me"/>
                <AboutDescription/>
                <Footer/>

            </Fragment>
        );
    }
}

export default AboutPage;