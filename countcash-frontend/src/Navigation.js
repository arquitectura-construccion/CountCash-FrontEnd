import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './styles.css';

export class SignupNavigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-white">CashCount</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="btn-log-in d-inline p-2 bg-dark text-white" to="/login">
                                Log In
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        );                
    }
}

export class LoginNavigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-white">CashCount</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="btn-sign-up d-inline p-2 bg-dark text-white" to="/">
                                Sign Up
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        );                
    }
}

export class LogoutNavigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-white">CashCount</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="btn-sign-up d-inline p-2 bg-dark text-white" to="/">
                                Log Out
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        );                
    }
}