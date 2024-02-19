import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <Navbar expand="lg" className="my-nav fixed-top">
      <Container className=''>
        <Navbar.Brand href="#home" className="mr-auto px-5">SE</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto px-5">
            {/* <Nav.Link href="./" className='px-3'>Home</Nav.Link> */}
            <Link to="/" className='px-3 nav-link'>Home</Link>
            <Link to="/portfolio" className='px-3 nav-link'>Portfolio</Link>
            <Link to="/contact" className='px-3 nav-link'>Contact</Link>
            {/* <Nav.Link href="./portfolio" className='px-3'>Portfolio</Nav.Link>
            <Nav.Link href="./contact" className='px-3'>Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
