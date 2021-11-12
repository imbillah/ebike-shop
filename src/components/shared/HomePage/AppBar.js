import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import profile from "../../../media/images/profile.png";

const navStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "17px",
  fontWeight: 500,
};
const AppBar = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#777af2",
              textDecoration: "none",
            }}
          >
            eBike
          </NavLink>
        </Navbar.Brand>
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
              <Nav.Link style={navStyle}>{user.displayName}</Nav.Link>
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
                  <Button className="bg-custom">LOGIN</Button>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register">
                  <Button className="bg-custom">REGISTER</Button>
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
