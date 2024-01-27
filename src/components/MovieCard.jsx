import React from 'react';
import { API_URL } from '../App';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {

  return (
    <Link to={`/movie/${imdbID}`}>
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
    </Link>
  );
}

export default MovieCard;