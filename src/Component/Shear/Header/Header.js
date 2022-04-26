import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Assets/logos/Group 1329.png";
import { Link } from "react-router-dom";

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
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/" className="link">
                Donation
              </Link>
              <Link to="/" className="link">
                Events
              </Link>
              <Link to="/" className="link">
                Blogs
              </Link>
            </Nav>
            <Link to="/sigh-up" style={{ textDecoration: "none" }}>
              <button className="registerBtn">Register</button>
            </Link>
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <button className="adminBtn">Admin</button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
