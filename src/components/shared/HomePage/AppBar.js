import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import profile from "../../../media/images/profile.png";

const navStyle = {
  textDecoration: "none",
  color: "black",
};
const AppBar = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>eBike</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/" style={navStyle}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/explore" style={navStyle}>
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" style={navStyle}>
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" style={navStyle}>
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
          {user?.email ? (
            <Nav className="align-items-center">
              <Nav.Link className="">
                <Link to="/dashboard" style={navStyle}>
                  Dashboard
                </Link>
              </Nav.Link>
              <Nav.Link>
                <img
                  src={profile}
                  style={{ width: "40px", height: "40px" }}
                  className="rounded-circle"
                  alt=""
                />
              </Nav.Link>
              <Nav.Link>{user.displayName}</Nav.Link>
              <Nav.Link>
                <Button variant="primary" onClick={logOut}>
                  Log Out
                </Button>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Link to="/login">
                  <Button variant="warning">Login</Button>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register">
                  <Button variant="warning">Register</Button>
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
