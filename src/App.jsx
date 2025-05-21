import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import FilmDetails from "./Components/FilmDetails";
import { useState } from "react";

function App() {
  const [idFilm, setIdFilm] = useState("");

  const pushIdFilm = Id => {
    setIdFilm(Id);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main pushIdFilm={pushIdFilm} />} />
        <Route path="/film/:filmId" element={<FilmDetails films={idFilm} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
