import { Button, Col, Container, Row } from "react-bootstrap";

const Footer = function () {
  return (
    <Container className="footer">
      <Container>
        <Row>
          <Col xs={6} md={2} className="d-flex gap-5">
            <i className="bi bi-facebook text-custom fs-4"></i>
            <i className="bi bi-instagram text-custom fs-4"></i>
            <i className="bi bi-twitter text-custom fs-4"></i>
            <i className="bi bi-youtube text-custom fs-4"></i>
          </Col>
        </Row>
      </Container>
      <Container className="text-custom my-3 fs-footer">
        <Row>
          <Col xs={6} sm={4} md={3}>
            <p>Audio and Subtitles</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Audio Description</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Help Center</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Gift Cards</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Media Center</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Investor Relations</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Jobs</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Terms of Use</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Privacy</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Legal Notices</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Cookie Preferences</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Corporate Information</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <p>Contact Us</p>
          </Col>
        </Row>
        <Button className="button my-2">Service Code</Button>
        <p className="my-3">&#169;1997-2019 Netflix, Inc. i-0d00fcda2fdf9c0de</p>
      </Container>
    </Container>
  );
};

export default Footer;
