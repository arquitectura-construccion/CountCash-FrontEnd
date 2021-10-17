import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './styles.css';

export class SignupNavigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="btn-log-in d-inline p-2 bg-dark text-white" to="/login">
                        Log In
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>            
        );                
    }
}

export class LoginNavigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="btn-sign-up d-inline p-2 bg-dark text-white" to="/">
                        Sign Up
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>            
        );                
    }
}

export class LogoutNavigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="btn-sign-up d-inline p-2 bg-dark text-white" to="/">
                        Log Out
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>            
        );                
    }
}