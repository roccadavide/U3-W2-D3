import { Button, ButtonGroup, Col, Container, Dropdown, Row } from "react-bootstrap";

const UpperMain = function () {
  return (
    <Container className="main">
      <Container className="p-0">
        <Row className="align-items-center">
          <Col xs={12} sm={4} md={3} xxl={2} className="mb-2 mb-md-0">
            <h1 className="text-white">Tv Shows</h1>
          </Col>
          <Col xs={12} md={9} xxl={10} className="d-flex flex-column flex-md-row align-items-start align-items-lg-center justify-content-between gap-2">
            <Dropdown as={ButtonGroup}>
              <Button variant="secondary" className="genresBtn">
                Genres
                <Dropdown.Toggle split variant="secondary" className="toggle bg-transparent" id="dropdown-split-basic" />
              </Button>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Film</Dropdown.Item>
                <Dropdown.Item href="#">TV Series</Dropdown.Item>
                <Dropdown.Item href="#">Documentary</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-flex">
              <i className="bi bi-list-nested text-white border border-white d-flex justify-content-center align-items-center p-2"></i>
              <i className="bi bi-grid text-white border border-white d-flex justify-content-center align-items-center p-2"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UpperMain;
