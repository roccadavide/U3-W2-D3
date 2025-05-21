import { Component, useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FetchedFilms1 = props => {
  // state = {
  //   films: [],
  //   hasError: false,
  //   errorMessage: "",
  // };

  const [theFilms, setTheFilms] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const fetchFilm = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=ce6cbdb9&s=${props.film}`);
      if (response.ok) {
        const films = await response.json();

        // this.setState({ films: films.Search }, () => {});

        setTheFilms(films.Search);

        console.log(theFilms);
      } else {
        throw new Error("Errore nel reperimento dei film");
      }
    } catch (error) {
      console.log(error);
      // this.setState({ hasError: true, errorMessage: error.message });
      setHasError(true);
      setErrorMessage(error.message);
    }
  };

  // componentDidMount() {
  //   this.fetchFilm();
  // }

  useEffect(() => {
    fetchFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (theFilms.length > 0) {
      props.pushFilms(theFilms);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theFilms]);

  return (
    <Container className="container-92">
      <h1 className="text-white fs-4 my-3">Trending Now</h1>
      <Row className="g-1">
        {!hasError && theFilms.length > 0 ? (
          theFilms.slice(0, 6).map(film => (
            <Col onClick={() => navigate(`/film/${film.imdbID}`)} key={film.imdbID} xs={12} sm={6} md={4} xl={2} className="col-12 mb-1 px-half">
              <img style={{ height: "330px" }} className="img-fluid" src={film.Poster} alt={film.Title} />
            </Col>
          ))
        ) : (
          <Alert variant="danger">{errorMessage}</Alert>
        )}
      </Row>
    </Container>
  );
};

export default FetchedFilms1;
