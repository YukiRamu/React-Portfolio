import React from 'react';
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { IoDocumentTextSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <Navbar className='topNav'>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="./logo.jpg"
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
            <Scroll to="contact" className='navLinks'>Contact</Scroll>
            <a
              className='resumeLink'
              href='https://github.com/YukiRamu/YukiRamu/blob/master/Resume.pdf' target="_blank"><IoDocumentTextSharp />Resume</a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
