import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import Search from "./components/Search";

export const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [movies, setMovies] = React.useState([]);
  return (
    <Router>
      <div className="app">
        <h1>MovieMania</h1>
        <Search setMovies={setMovies}/>
        <Routes>
          <Route path="/" element={<HomePage movies={movies}/>} />
          <Route path="/movie/:id" element={<MovieDetail/>} />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = ({movies}) => {

  return (
    <>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
};

export default App;
