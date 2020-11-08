import { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

export default class NavbarComponent extends Component {
    render() {
        return (
            <Navbar
                sticky="top"
                className="navbar navbar-expand-lg navbar-dark"
                bg="dark"
                expand="lg"
            >
                <Navbar.Brand as={Link} to="home" className="noselect">
                    Bud Smith
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav mr-auto">
                        <Nav.Link
                            as={Link}
                            to="personal-projects"
                            className="nav-link noselect"
                        >
                            Personal Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="academic-projects"
                            className="nav-link noselect"
                        >
                            Academic Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="contact"
                            className="nav-link noselect"
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
