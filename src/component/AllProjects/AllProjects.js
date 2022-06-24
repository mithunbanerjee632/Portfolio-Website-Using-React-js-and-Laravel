import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import images from "../../asset/images/mobilepondit.png";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class AllProjects extends Component {

    constructor() {
        super();

        this.state={
            myData:[],
            loader:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectAll).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else{
                this.setState({myData:result,loader:false})
            }

        }).catch(error=>{
            this.setState({error:true,loading:false})
        });
    }


    render() {

        if(this.state.loader == true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loader == false && this.state.error==false){
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
                            <Button variant="primary"><Link className="link-style" to={"/projectDetails/"+myProject.id+"/"+myProject.project_name}>Details</Link></Button>
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
        }else if(this.state.error==true){
            return <WentWrong/>
        }


    }
}

export default AllProjects;