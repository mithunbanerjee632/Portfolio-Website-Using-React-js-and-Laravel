import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner from "../component/TopBanner/TopBanner";
import Services from "../component/Services/Services";
import Analysis from "../component/Analysis/Analysis";
import Summary from "../component/Summary/Summary";
import RecentProject from "../component/RecentProject/RecentProject";
import Courses from "../component/Courses/Courses";
import Video from "../component/Video/Video";
import ClientReview from "../component/ClientReview/ClientReview";
import Footer from "../component/Footer/Footer";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Home"/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProject/>
                <Courses/>
                <Video/>
                <ClientReview/>
                <Footer/>

            </Fragment>
        );
    }
}

export default HomePage;