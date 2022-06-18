import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from "video-react";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

class Video extends Component {
     constructor() {
         super();
         this.state={
             show:false,
             videDesc:"",
             videoUrl:""
         }
     }

     componentDidMount() {
         RestClient.GetRequest(AppUrl.VideoHome).then(result=>{
             this.setState({videDesc:result [0]['video_description'],videoUrl:result[0]['video_url']})
         });
     }

    modalClose=()=>{
         this.setState({show:false});
     }

     modalOpen = ()=>{
         this.setState({show:true});
     }

    render() {
        return (
            <Fragment>
                <Container className="text-center videoSection">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                           <div>
                               <p className="videoTitle">How I Do</p>
                               <p className="videoDes">{this.state.videDesc}</p>
                               <p><FontAwesomeIcon onClick={this.modalOpen} className=" playBtn iconBullet" icon={faPlayCircle} /></p>
                           </div>
                        </Col>
                    </Row>
                </Container>



                <Modal size="xl" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src={this.state.videoUrl} />
                            <BigPlayButton position="center"/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;