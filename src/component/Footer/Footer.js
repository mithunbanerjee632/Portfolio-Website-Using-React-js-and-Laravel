import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faAddressCard} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>

                        <Col lg={3} md={6} sm={12} className=" p-5 text-start">
                            <h1 className="serviceName ">Follow Me</h1>
                            <a className="socialIcon" href=""><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a className="socialIcon" href=""><FontAwesomeIcon icon={faYoutube} /> YouTube</a>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h1 className="serviceName">Address</h1>
                            <p className="footerAddress">#169/8/1-A Moriam Villa,WestDholair Par,Shyampur,Dhaka-1204</p>
                            <p className="footerAddress"><FontAwesomeIcon icon={faEnvelope} /> Engr.mithunbanerjee632@gmail.com</p>
                            <p className="footerAddress"><FontAwesomeIcon icon={faPhone} /> 01713574869</p>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h1 className="serviceName">Information</h1>
                            <a className="footerLink" href="">About Me</a><br/>
                            <a className="footerLink" href="">My Resume</a><br/>
                            <a className="footerLink" href="">Contact Me</a>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-start" >
                            <h1 className="serviceName">Legal</h1>
                            <a className="footerLink" href="">Refund Policy</a><br/>
                            <a className="footerLink" href="">Terms and Condition</a><br/>
                            <a className="footerLink" href="">Privacy Policy</a>

                        </Col>

                    </Row>

                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">Mithun.com &copy; 2022-2023</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;