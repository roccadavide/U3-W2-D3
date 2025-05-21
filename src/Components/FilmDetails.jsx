import { Image, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const FilmDetails = props => {
  const [film, setFilm] = useState([]);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  console.log("params", params);

  useEffect(() => {
    console.log(params.filmId);

    const filmObj = props.films.find(film => film.imdbID === params.filmId);

    if (filmObj) {
      setFilm(filmObj);
    } else {
      setTimeout(() => {
        setHasError(true);

        setTimeout(() => {
          navigate("/");
        }, 5000);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        {film ? (
          <Col md={8} className="my-5">
            <Image src={film.Poster} className="img-fluid imgDetails" />
            <h1 className="text-white">{film.Title}</h1>
            <p className="text-white">{film.Year}</p>
          </Col>
        ) : hasError ? (
          <Col>
            <Alert variant="danger" className="d-flex justify-content-between align-items-center">
              Film non trovato
              <Link to="/" className="btn btn-dark">
                Scegli un altro film
              </Link>
            </Alert>
          </Col>
        ) : (
          <Col className="text-center">
            <Spinner animation="grow" variant="info" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default FilmDetails;
