import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ErrorAnimation from "../../asset/images/error.svg";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="loadingAnimation" src={ErrorAnimation}/>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default WentWrong;