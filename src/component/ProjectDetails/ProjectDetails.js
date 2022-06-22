import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import image from "../../asset/images/app-about.jpg"
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";

class ProjectDetails extends Component {

    constructor(props) {
        super();
        this.state={

            MyProjectID:props.id,
            project_name:" ",
            short_description:" ",
            project_features:" ",
            live_preview:" ",
            img_two:" "


        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.MyProjectID).then(result=>{


            this.setState({

                project_name: result[0]['project_name'],
                short_description: result[0]['short_description'],
                project_features: result[0]['project_features'],
                live_preview: result[0]['live_preview'],
                img_two: result[0]['img_two']
            })
        }).catch(error=>{

        });
    }


    render() {
        return (

            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={this.state.img_two}/>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">{this.state.project_name}</h1>
                            <p className="serviceDescription">{this.state.short_description} </p>
                            { ReactHtmlParser(this.state.project_features) }


                            <Button variant="primary" target="_blank" href={"//"+this.state.live_preview}>More Info</Button>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ProjectDetails;