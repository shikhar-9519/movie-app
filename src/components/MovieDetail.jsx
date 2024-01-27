import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../App';
import StarRating from './StarRating';
import { MutatingDots } from 'react-loader-spinner';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovie(data);
    }

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <MutatingDots
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
  }
  return (
    <div className="movie-detail-container">
      <div className="poster-container">
        <img className="poster" src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="info-container">
        <h2 className="title">{movie.Title}</h2>
        <p className="release-year">Released: {movie.Released}</p>
        <p className="runtime">Runtime: {movie.Runtime}</p>
        <p className="genre">Genre: {movie.Genre}</p>
        <p className="plot">{movie.Plot}</p>
        <p className="director">Director: {movie.Director}</p>
        <p className="actors">Actors: {movie.Actors}</p>
        <p className="language">Language: {movie.Language}</p>
        <p className="country">Country: {movie.Country}</p>
        <p className="awards">Awards: {movie.Awards}</p>
        <div className="ratings">
          {movie.Ratings.map((rating, index) => (
            <p key={index} className="rating">
              {rating.Source}: {rating.Value}
            </p>
          ))}
        </div>
        <p className="imdb-rating">IMDb Rating: <StarRating rating={movie.imdbRating}/> </p>
        
        <p className="imdb-votes">IMDb Votes: {movie.imdbVotes}</p>
        <p className="metascore">Metascore: {movie.Metascore}</p>
        <p className="box-office">Box Office: {movie.BoxOffice}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
