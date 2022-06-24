import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from "../../asset/images/navlogo.svg";
import blueLogo from "../../asset/images/navlogoScroll.svg";
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import {NavLink} from "react-router-dom";


class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state={
            navVariant:"dark",
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBackground:"navBarBackground",
            navBarItem:"navItem",
            pageTitle:props.title,


        };
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light', navBarTitle:'navTitleScroll',navBarLogo:[blueLogo],navBackground:'navBarBackgroundScroll',navBarItem:'navItemScroll'})
        }else if(window.scrollY<100){
            this.setState({navVariant:'dark', navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBackground:'navBarBackground',navBarItem:'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBackground} fixed="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand ><NavLink className={this.state.navBarTitle} to="/"> <img src={this.state.navBarLogo}/> Mithun Banerjee</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link> <NavLink exact activeStyle={{color:'00a8ee'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'00a8ee'}} className={this.state.navBarItem} to="/service">SERVICES</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'00a8ee'}} className={this.state.navBarItem} to="/course">COURSES</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'00a8ee'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'00a8ee'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;