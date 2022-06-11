import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from "video-react";

class Video extends Component {
     constructor() {
         super();
         this.state={
             show:false
         }
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
                               <p className="videoDes">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                               <p><FontAwesomeIcon onClick={this.modalOpen} className=" playBtn iconBullet" icon={faPlayCircle} /></p>
                           </div>
                        </Col>
                    </Row>
                </Container>



                <Modal size="xl" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
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