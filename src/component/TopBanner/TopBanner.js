import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import axios from "axios";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
class TopBanner extends Component {


   constructor() {
       super();

       this.state = {
           title: "...",
           subtitle: "..."

       }
   }



    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            this.setState({title: result[0]['home_title'],subtitle: result[0]['home_subtitle']})

        }).catch(error=>{
            this.setState({title:"???",subtitle: "???"})
        });
    }


    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                       <Container className="topContent">
                           <Row>
                               <Col className="text-center">
                                   <h1 className="topTitle">{this.state.title}</h1>
                                   <h4 className="topSubtitle">{this.state.subtitle}</h4>
                                   <Button variant="primary">More Info</Button>
                               </Col>
                           </Row>
                       </Container>

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;