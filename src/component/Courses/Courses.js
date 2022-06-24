import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import images from "../../asset/images/client_meeting.jpg"
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Courses extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loader:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else {
                this.setState({myData: result, loader: false})
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }


    render() {
        if(this.state.loader==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loader==false && this.state.error==false){
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
                    <Container >
                        <h1 className="serviceMainTitle text-center">OUR COURSES</h1>
                        <Row>

                            {myView}

                        </Row>
                    </Container>

                </Fragment>
            );
        }else if(this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default Courses;