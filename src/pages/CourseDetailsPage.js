import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import Footer from "../component/Footer/Footer";
import {useParams} from "react-router-dom";

function withParams(Component){
    return props=><Component {...props} params={useParams()} />
}

class CourseDetailsPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        const {courseID} = this.props.params;

        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails id={courseID}/>
                <Footer/>

            </Fragment>
        );
    }
}

export default withParams(CourseDetailsPage);