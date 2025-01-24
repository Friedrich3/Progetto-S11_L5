import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { Broadcast, Grid, House } from "react-bootstrap-icons";

const Header = function () {
  return (
      <Navbar expand="lg"  data-bs-theme="dark" className=" flex-lg-column">
        <Container fluid className="px-4 pe-lg-0 flex-lg-column">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#">
            <img
              src="../public/assets/logos/music.svg"
              className="d-inline-block align-top"
              alt="Apple Music Logo"
            />
          </Navbar.Brand>
          <Button variant="outline-secondary" type="button" className=" d-lg-none">Log-In</Button>
          <Navbar.Collapse id="basic-navbar-nav" className="custom-text flex-lg-column">
            <Nav className="me-auto flex-lg-column">
              <Form>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder='Search...'
                      className=""
                    />
                  </Col>
                </Row>
              </Form>
              <Nav.Link href="" ><House className="custom-text"></House> Home</Nav.Link>
              <Nav.Link href="" active><Grid className="custom-text"></Grid> News</Nav.Link>
              <Nav.Link href=""><Broadcast className="custom-text"></Broadcast> Radio</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
export default Header;
