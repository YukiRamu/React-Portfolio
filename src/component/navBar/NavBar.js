import React from 'react';
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar className='topNav'>
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="../logo.jpg"
              className="logo"
            />
          </Navbar.Brand>
          <Nav>
            <Link to="/about" className='navLinks'>
              About
            </Link>
            <Link to="/project" className='navLinks'>
              Project
            </Link>
            <Link to="/contact" className='navLinks'>
              Contact
            </Link>
            {/* themeChanger */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
