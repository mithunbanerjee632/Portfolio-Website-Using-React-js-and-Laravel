import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col, Container, Row} from "react-bootstrap";
import image from "../../asset/images/mithunbanerjee.jpg"
import Slider from "react-slick";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

class ClientReview extends Component {
    constructor() {
        super();

        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
            this.setState({myData:result})
        })
    }


    render() {

        const reviews = this.state.myData;

        const myView = reviews.map(review=>{
           return <div>
                <Row className="text-center justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <img src={review.client_img} className="circleImg"/>
                        <h1 className="serviceName">{review.client_title}</h1>
                        <p className="serviceDescription">{review.client_description}</p>

                    </Col>
                </Row>
            </div>
        });

        var settings = {
            autoplay:true,
            autoplaySpeed:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>

                   <Slider {...settings}>

                       {myView}
                   </Slider>
                </Container>


            </Fragment>
        );
    }
}

export default ClientReview;