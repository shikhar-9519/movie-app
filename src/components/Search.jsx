import React from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../App';
import SearchIcon from "../search.svg";

export default function Search({setMovies}) {
    const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    navigate(`/`);
  };
  return (
    <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovies(searchTerm)
            }
          }}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
  )
}
