import React, { useContext } from "react";
import { Navbar, Nav} from "react-bootstrap";
import BIGFlix from "../Assests/Bigfllix-Navbar.jpg";
import "../CSS/NavBar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ProfileIcon from "../Features/ProfileIcon";
import { UsernameProvider } from "../App";

const NavBar = () => {
  const {authenticate} =useContext(UsernameProvider)
  return (
    <div>
     
        <Navbar className="nav-bar" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <img src={BIGFlix} alt="bigflix logo" height={100} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
              <Nav
                className="nav-links me-auto d-flex justify-content-around"
                style={{maxHeight:"100px"}}
                navbarScroll
              >
              
               <Link to={"/"} className="ms-2 nav-item">
                  Home
                </Link>
              
               {
                authenticate && (
                  <>
                   <Link to={"/movies"} className="ms-2 nav-item">
                 Movies
                </Link>
                <Link to={"/tvseries"} className="ms-2 nav-item">
                TV Series
                </Link>
                <Link to={"/watchlist"} className="ms-2 nav-item">
                Watch List
                </Link>
                <Link to={"/favouritelist"} className="ms-2 nav-item">
               Favourite List
                </Link>
                  </>
                )
               }
             
             
            
              </Nav>
             
              <div className="mt-2  d-flex justify-content-end">
                <ProfileIcon />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    
  );
};

export default NavBar;
