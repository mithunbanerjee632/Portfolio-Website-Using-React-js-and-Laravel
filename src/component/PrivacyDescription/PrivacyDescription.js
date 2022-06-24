import React, {Component} from 'react';
import {Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class PrivacyDescription extends Component {

    constructor() {
        super();
        this.state={
            desc:"...",
            loader:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else {
                this.setState({desc: result[0]['privacy'], loader: false})
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        });
    }

    render() {
        if(this.state.loader==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loader==false && this.state.error==false){
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
        }else if(this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default PrivacyDescription;