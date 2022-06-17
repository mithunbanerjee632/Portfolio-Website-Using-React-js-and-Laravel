import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import images from "../../asset/images/mobilepondit.png";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

class AllProjects extends Component {

    constructor() {
        super();

        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectAll).then(result=>{
            this.setState({myData:result})
        }).catch();
    }


    render() {

        const myProjects = this.state.myData;

        const myView =  myProjects.map(myProject=>{

            return <Col sm={12} md={6} lg={4} className="p-2">
                <Card className="projectCard">
                    <Card.Img variant="top" src={myProject.img_one}/>
                    <Card.Body>
                        <Card.Title className="projectCardTitle"> {myProject.project_name}</Card.Title>
                        <Card.Text className="projectCardDes">
                            {myProject.short_description}
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/projectDetails">Details</Link></Button>
                    </Card.Body>
                </Card>
            </Col>


        });

        return (
            <Fragment>
                <Container className="text-center mt-3">
                    <Row>
                        {myView}
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AllProjects;