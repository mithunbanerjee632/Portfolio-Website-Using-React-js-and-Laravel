import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";

class RefundDescription extends Component {

    constructor() {
        super();
        this.state={
            desc:"..."
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({desc:result[0]['refund']})
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="serviceDescription mt-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            { ReactHtmlParser(this.state.desc) }
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RefundDescription;