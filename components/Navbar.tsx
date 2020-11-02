import { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

export default class NavbarComponent extends Component {
    render() {
        return (
            <Navbar
                className="navbar navbar-expand-lg navbar-dark"
                bg="dark"
                expand="lg"
            >
                <Navbar.Brand href="#home">Bud Smith</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#personal-projects">
                            Personal Projects
                        </Nav.Link>
                        <Nav.Link href="#academic-projects">
                            Academic Projects
                        </Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
