import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import graphicsLogo from "../../asset/images/graphics.svg";
import webLogo from "../../asset/images/web.svg";
import mobileLogo from "../../asset/images/mobile.svg";
import restClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";

class Services extends Component {

   constructor() {
       super();
       this.state={
           myData:[],
           loader:true,
       }
   }

   componentDidMount() {
       restClient.GetRequest(AppUrl.Services).then(result=>{
           this.setState({myData:result,loader:false})
       }).catch();
   }


    render() {

       if(this.state.loader==true){
           return <Loading/>
       }else{
           const myList = this.state.myData;

           const myView = myList.map(myList=>{

               return  <Col lg={4} md={6} sm={12}>
                   <div className="serviceCard text-center">
                       <img src={myList.service_logo}/>
                       <h2 className="serviceName">{myList.service_name}</h2>
                       <p className="serviceDescription">{myList.service_description}</p>
                   </div>
               </Col>

           });

           return (
               <Fragment>
                   <Container className="text-center">
                       <h1 className="serviceMainTitle">MY SERVICES</h1>
                       <Row>

                           {myView}


                       </Row>
                   </Container>

               </Fragment>
           );
       }


    }
}

export default Services;