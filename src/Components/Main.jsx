import FetchedFilms1 from "./FetchedFilms1";
import FetchedFilms2 from "./FetchedFilms2";
import FetchedFilms3 from "./FetchedFilms3";
import Footer from "./Footer";
import UpperMain from "./UpperMain";

const Main = props => {
  return (
    <>
      <UpperMain />
      <FetchedFilms1 film="the hangover" pushFilms={props.pushFilms} />
      <FetchedFilms2 film="saw" pushFilms={props.pushFilms} />
      <FetchedFilms3 film="scary movie" pushFilms={props.pushFilms} />
      <Footer />
    </>
  );
};

export default Main;
