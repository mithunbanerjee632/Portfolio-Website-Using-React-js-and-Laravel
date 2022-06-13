import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import AllCourses from "../component/AllCourses/AllCourses";
import Footer from "../component/Footer/Footer";

class CoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course"/>
                <PageTop pagetitle="All Courses"/>
                <AllCourses />
                <Footer/>

            </Fragment>
        );
    }
}

export default CoursesPage;