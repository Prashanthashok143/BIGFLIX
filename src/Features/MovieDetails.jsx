import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/MovieDetails.css";
import Youtube from"../Assests/youtube.png"
import Favourite from"../Assests/add-to-favorites.png"
import Watchlist from"../Assests/bookmark.png"
import "react-toastify/dist/ReactToastify.css";
import CastDetails from "./CastDetails";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const MovieDetails = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const MovieDataDetails = location.state.MovieDataDetails;
  let {
    id,
    name,
    backdrop_path,
    overview,
    poster_path,
    release_date,
    title,
    media_type,
    vote_average,
  } = MovieDataDetails;
  console.log(MovieDataDetails)

  const checkIfFavouriteExists=async(url,movieId)=>{
    try{
      const response =await axios.get(url);
      const favourites = response.data;
      return favourites.some(favourite => favourite.id === movieId);  
    }
  
  catch(error){
    console.error("Error fetching favouirtes:",error);
    return false;
  }
  };
  const postFavourite = async() => {
    const postMovieDetails = {
      id,
      name,
      backdrop_path,
      overview,
      poster_path,
      release_date,
      title,
      media_type,
      vote_average,
    };

    const determineType = (details) => {
    
      if (details.name) {
        return "tv";
      } else if (details.title) {
        return "movie";
      } else {
      return null;
      }
    };

    const type = media_type ? (media_type === "tv" ? "tv" : "movie") : determineType(postMovieDetails);
   
    if (type) {
      const url = type === "tv"
        ? "https://bigflix-jsonserver-143.onrender.com/TVShowsFavourite"
        : "https://bigflix-jsonserver-143.onrender.com/MoviesFavourite";

        const exists=await checkIfFavouriteExists(url,id)
        if(exists){
          toast.error("Already add to favourite list");
          return;
        }
        axios.post(url, postMovieDetails)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
        toast.success("Add to favourite list");
    } else {
      console.error("Failed to determine type, details not posted.");
    }
  };


 const postWatchlist=async()=>{
  const postMovieDetails = {
   id,
    name,
    backdrop_path,
    overview,
    poster_path,
    release_date,
    title,
    media_type,
    vote_average,
  };

  const determineType = (details) => {
  
    if (details.name) {
      return "tv";
    } else if (details.title) {
      return "movie";
    } else {
    return null;
    }
  };

  const type = media_type ? (media_type === "tv" ? "tv" : "movie") : determineType(postMovieDetails);
 
  if (type) {
    const url = type === "tv"
      ? "https://bigflix-jsonserver-143.onrender.com/TVShowsWatchlist"
      : "https://bigflix-jsonserver-143.onrender.com/MoviesWatchlist";

      const exists=await checkIfFavouriteExists(url,id)
        if(exists){
          toast.error("Already add to Watchlist list");
          return;
        }
    axios.post(url, postMovieDetails)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
      toast.success("Add to Watchlist list");
  } else {
    console.error("Failed to determine type, details not posted.");
  }

 }

  return (
    <div className="main-div">
      <div
        className="movie-details"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
      >
        <div className="movie-details-content">
          <div className="poster-container">
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt={title}
              className="poster"
            />
          </div>
          <div className="movie-info ps-3 ms-3">
            <h1 className="title">{title || name}</h1>
            <p className="overview">{overview}</p>
            <p className="release-date">Release date : {release_date}</p>
            <p className="vote-average">Rating : {vote_average.toFixed(1)}</p>
            <div className="movie-actions">
              <button
              title="Youtube"
                className=" btn"
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/results?search_query=${title || name} trailer`
                  )
                }
              >
          <img src={Youtube} alt="youtube"/>
              </button>

              <button
               title="Add to Favourite" className="btn" onClick={postFavourite}>
             <img src={Favourite} alt="fav" />
              </button>
              <button 
                  title="Add to WatchList"  className="btn" onClick={postWatchlist}>
                <img src={Watchlist} alt="watchlist" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
      <CastDetails />
    </div>
  );
};

export default MovieDetails;
