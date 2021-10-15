import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './styles.css';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                        Sign In
                    </NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/login">
                        Log In
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>            
        );                
    }
}