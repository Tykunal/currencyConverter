import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>C*2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/currency">Convert</Nav.Link>
            <NavDropdown title="Connect" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/tykunal/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://www.twitter.com/tykunal07">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.github.com/tykunal">GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
