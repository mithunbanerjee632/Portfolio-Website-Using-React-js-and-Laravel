import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import ContactSection from "../component/ContactSection/ContactSection";
import Services from "../component/Services/Services";
import Footer from "../component/Footer/Footer";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Service"/>
                <PageTop pagetitle="My Services"/>
                <Services/>
                <ContactSection/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ServicePage;