import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function MyHeader() {
  return (
    <>
    <Navbar expand="lg" className="my-nav fixed-top">
      <Container fluid>
        <p className='header-text'>Sarah Egleston</p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/portfolio" className='nav-link'>Portfolio</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
            <Link to="https://docs.google.com/document/d/1LVSjmvEjmmEkSuMieYE-GtVsvnsXw6Bi4bG-AFHPz_k/edit?usp=sharing" className='nav-link'>Resume</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MyHeader;
