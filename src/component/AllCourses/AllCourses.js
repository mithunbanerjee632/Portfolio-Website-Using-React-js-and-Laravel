import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import images from "../../asset/images/client_meeting.jpg";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

class AllCourses extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
            this.setState({myData:result})
        }).catch(error=>{

        })
    }


    render() {

        const myCourses = this.state.myData;

        const myView =  myCourses.map(myCourse=>{
            return <Col lg={6} md={12} sm={12} className="p-2">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img className="CourseImage" src={myCourse.small_img}/>
                    </Col>

                    <Col lg={6} md={6} sm={12} className="p-2">
                        <h4 className="text-justify courseTitle">{myCourse.short_title}</h4>
                        <p className="text-justify courseDes">{myCourse.short_des}</p>
                        <Link to={"/CourseDetails/"+myCourse.id} className="courseDetails">Details</Link>
                    </Col>
                </Row>

            </Col>
        });





        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        {myView}
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AllCourses;