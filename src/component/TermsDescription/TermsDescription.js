import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class TermsDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="serviceDescription mt-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <ul>
                                <li>First 30 Days Money Back!</li>
                                <li>THIS IS NOT A BUY-AND-TRY PRODUCT</li>
                                <li>Refund is applicable for software and plugins, if the products aren't functioning, producing errors or you haven't received access to them at any time during the first 30 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 30 days or early. That's a firm promise and commitment.</li>
                                <li>After 30 Days : There is no refund offered after the first 30 days.</li>
                                <li>To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>
                                <li>Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law.</li>


                                <h1 className="serviceName ">Who i Am</h1>
                                <hr/>
                                <p className="serviceDescription p-4">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>



                                <h1 className="serviceName">My Mission</h1>
                                <hr/>
                                <p className="serviceDescription  p-4">My mission is to develop unique idea and quality software that will secure top ranking in marketplace, people's system and people's heart. Develop robust, secure, dynamic, responsive software for all platform (computer, tab, mobile phone). Provide top notch customer service, customization of our product according to customer demand and current technology. Planning advanced techniques for optimization, user experience and satisfaction of customer for our software. Planning flexible software that will not be bounded by any linguistic or regional restriction. I want to flourish software that can blow people's heart and soul  </p>



                                <h1 className="serviceName">My Vision</h1>
                                <hr/>
                                <p className="serviceDescription  p-4">My vision is to brand our firm as the best firm in the world. Secure the top place among software providers for both local and international market. Brand our country as the best software provider country. Create employment for youth on the field of both software and corporate level. Provide our country and world with superior software. Nurture youths to be highly skilled software engineers </p>


                            </ul>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default TermsDescription;