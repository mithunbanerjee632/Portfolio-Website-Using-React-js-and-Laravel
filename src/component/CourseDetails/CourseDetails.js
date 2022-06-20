import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";

class CourseDetails extends Component {

    constructor(props) {
        super();

        this.state={
            CourseId:props.id,
            long_title:" ",
            long_des:" ",
            total_lecture:" ",
            total_student:" ",
            skill_all:" ",
            video_url:" ",
            course_link:" "


        }

    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseDetails+this.state.CourseId).then(result=>{
            this.setState({
                long_title:result[0]['long_title'],
                long_des:result[0]['long_des'],
                total_lecture:result[0]['total_lecture'],
                total_student:result[0]['total_student'],
                skill_all:result[0]['skill_all'],
                video_url:result[0]['video_url'],
                course_link:result[0]['course_link']

            })
        }).catch(error=>{

        });
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h3 className="topPageCourseTitles ">{this.state.long_title}</h3>
                                    <h5 className="topPageCourseSubTitles mt-3">Total Lecture= {this.state.total_lecture}</h5>
                                    <h5 className="topPageCourseSubTitles mt-3">Total Student= {this.state.total_student}</h5>

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <p className="topPageCourseDes">{this.state.long_des}</p>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Skill You Get</h1>
                            { ReactHtmlParser(this.state.skill_all) }

                            <Button variant="primary">More Info</Button>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source src={this.state.video_url} />
                                <BigPlayButton position="center"/>
                            </Player>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default CourseDetails;