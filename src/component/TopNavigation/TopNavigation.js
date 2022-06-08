import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from "../../asset/images/navlogo.svg";
import blueLogo from "../../asset/images/navlogoScroll.svg";

class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBackground:"navBarBackground",
            navBarItem:"navItem"
        };
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blueLogo],navBackground:'navBarBackgroundScroll',navBarItem:'navItemScroll'})
        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBackground:'navBarBackground',navBarItem:'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }


    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBackground} fixed="top" collapseOnSelect expand="lg"  variant="dark">
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navBarLogo}/> Mithun Banerjee</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;