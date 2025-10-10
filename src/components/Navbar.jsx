import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();

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
            src="/FlavorCharterInfo/logoDark.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          Flavor Charter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "fw-bold" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/preliminary-results"
              className={
                location.pathname === "/preliminary-results" ? "fw-bold" : ""
              }
            >
              Preliminary Results
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === "/about" ? "fw-bold" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/participate"
              className={location.pathname === "/participate" ? "fw-bold" : ""}
            >
              Participate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
