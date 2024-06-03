import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function MyHeader() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar expand="lg" className="my-nav" expanded={expanded}>
        <Container fluid>
          <Link to='https://egleston.dev' className='header-text'>egleston.dev</Link>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className='toggle-nav' 
            onClick={handleToggle} 
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className='nav-link' onClick={closeNavbar}>Home</Link>
              <Link to="/portfolio" className='nav-link' onClick={closeNavbar}>Portfolio</Link>
              <Link to="/contact" className='nav-link' onClick={closeNavbar}>Contact Me</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyHeader;
