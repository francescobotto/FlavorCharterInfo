import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="mb-4"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="./logoDark.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          Flavor Charter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/preliminary-analysis">
              Preliminary Analysis
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/participate">
              Participate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
