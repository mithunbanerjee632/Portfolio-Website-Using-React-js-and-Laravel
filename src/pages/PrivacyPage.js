import React, {Component} from 'react';
import {Fragment} from "react";
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import Footer from "../component/Footer/Footer";
import PrivacyDescription from "../component/PrivacyDescription/PrivacyDescription";

class PrivacyPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy Policy"/>
                <PageTop pagetitle="Privacy Policy"/>
                <PrivacyDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;