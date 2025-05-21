import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = function () {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image onClick={() => navigate("/")} className="img-fluid" style={{ width: "100px" }} src="src/assets/netflix_logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent">
          <span>
            <i className="bi bi-list text-white"></i>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link className="text-white fs-custom" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="text-white fs-custom" href="#">
              TV Shows
            </Nav.Link>
            <Nav.Link className="text-white fs-custom" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="text-white fs-custom" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-white fs-custom" href="#">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search text-white"></i>
            <Nav.Link className="text-white fs-custom" href="#">
              KIDS
            </Nav.Link>
            <i className="bi bi-bell-fill text-white"></i>

            <NavDropdown
              className="text-white d-flex flex-row align-items-center"
              title={<img className="img-fluid" style={{ width: "30px" }} src="src/assets/kids_icon.png" alt="kidsIcon" />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">App Settings</NavDropdown.Item>
              <NavDropdown.Item href="#">Help</NavDropdown.Item>
              <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
