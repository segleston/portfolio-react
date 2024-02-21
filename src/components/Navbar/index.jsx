// importing  the required modules
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
// nav bar function
function MyNav() {
  return (
    <Navbar expand="lg" className="my-nav fixed-top">
      <Container className=''>
        <Navbar.Brand href="#home" className="mr-auto px-5 title-nav">Sarah Egleston</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto px-5">
            <Link to="/" className='px-3 nav-link'>Home</Link>
            <Link to="/portfolio" className='px-3 nav-link'>Portfolio</Link>
            <Link to="/contact" className='px-3 nav-link'>Contact</Link>
            <Link to="/resume" className='px-3 nav-link'>Resume</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
