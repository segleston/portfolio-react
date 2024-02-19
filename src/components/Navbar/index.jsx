import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  return (
    <Navbar expand="lg" className="my-nav fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="mr-auto">SE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./portfolio">Portfolio</Nav.Link>
            <Nav.Link href="./contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
