import FetchedFilms1 from "./FetchedFilms1";
import FetchedFilms2 from "./FetchedFilms2";
import FetchedFilms3 from "./FetchedFilms3";
import Footer from "./Footer";
import UpperMain from "./UpperMain";

const Main = props => {
  return (
    <>
      <UpperMain />
      <FetchedFilms1 film="the hangover" pushIdFilm={props.pushIdFilm} />
      <FetchedFilms2 film="saw" pushIdFilm={props.pushIdFilm} />
      <FetchedFilms3 film="scary movie" pushIdFilm={props.pushIdFilm} />
      <Footer />
    </>
  );
};

export default Main;
