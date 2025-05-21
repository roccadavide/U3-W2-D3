import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import FilmDetails from "./Components/FilmDetails";
import { useState } from "react";

function App() {
  const [films, setFilms] = useState([]);

  const pushFilms = theFilms => {
    setFilms(theFilms);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main pushFilms={pushFilms} />} />
        <Route path="/film/:filmId" element={<FilmDetails films={films} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
