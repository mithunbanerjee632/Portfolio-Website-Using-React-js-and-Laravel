import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="serviceDescription">Email address</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="serviceDescription">Message</Form.Label>
                                    <Form.Control    as="textarea" rows="3"/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>

                            <p className="footerAddress">#169/8/1-A Moriam Villa,WestDholair Par,Shyampur,Dhaka-1204</p>
                            <p className="footerAddress"><FontAwesomeIcon icon={faEnvelope} /> Engr.mithunbanerjee632@gmail.com</p>
                            <p className="footerAddress"><FontAwesomeIcon icon={faPhone} /> 01713574869</p>


                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ContactSection;