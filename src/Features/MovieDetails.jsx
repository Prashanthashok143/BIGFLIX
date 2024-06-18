import React from "react";
import { useLocation } from "react-router-dom";
import '../CSS/MovieDetails.css';

import CastDetails from "./CastDetails";
const MovieDetails = () => {
  const location = useLocation();

  const MovieDataDetails = location.state.MovieDataDetails;
  const {
    name,
    backdrop_path,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = MovieDataDetails;


  return (
    <div>
    <div
      className="movie-details"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})` }}
    >
      <div className="movie-details-content">
        <div className="poster-container">
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
            className="poster"
          />
        </div>
        <div className="movie-info ps-3 ms-3 text-start">
          <h1 className="title">{title || name}</h1>
          <p className="overview">{overview}</p>
          <p>{release_date}</p>
          <p className="vote-average">Rating:{vote_average.toFixed(1)}</p>
          <div className="movie-actions">
          <button className="btn btn-danger m-1" onClick={() => window.open(`https://www.youtube.com/results?search_query=${title || name} trailer`)}>Watch Trailer</button>
           
            <button className="btn btn-success m-1">Add to Favourite List</button>
            <button className="btn btn-warning m-1">Add to Watchlist</button>
          </div>
        </div>
      </div>
      </div>
    <CastDetails/>
    </div>
  );
};

export default MovieDetails;
