import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import BIGFlix from "../Assests/Bigfllix-Navbar.jpg";
import "../CSS/NavBar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <div>
      <div>
        <Navbar className="nav-bar" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <img src={BIGFlix} alt="bigflix logo" height={75} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
              <Nav
                className="nav-links"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to={"/"} className="ms-2 nav-item">
                  Home
                </Link>
              
                <Link to={"/"} className="ms-2 nav-item">
                 Movies
                </Link>
                <Link to={"/login"} className="ms-2 nav-item">
                 WatchList
                </Link>

              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
