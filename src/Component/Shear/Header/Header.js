import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Assets/logos/Group 1329.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" style={{ width: "200px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Donation</Nav.Link>
              <Nav.Link href="#link">Events</Nav.Link>
              <Nav.Link href="#link">Blogs</Nav.Link>
            </Nav>
            <button>Register</button>
            <button>Admin</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
