import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import Search from "./components/Search";
import { MutatingDots } from "react-loader-spinner";

export const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

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
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />;
        </div>
      )}
    </>
  );
};

export default App;
