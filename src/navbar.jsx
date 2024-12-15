import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './index.css';

function NavbarComponent() {
  return (
    <div className="navbar-light">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Navbar Brand */}
          <Navbar.Brand as={Link} to="/">Juswa's Little Corner</Navbar.Brand>

          {/* Navbar Toggle for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          {/* Navbar Collapse for nav links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/education">Education</Nav.Link>
              <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
