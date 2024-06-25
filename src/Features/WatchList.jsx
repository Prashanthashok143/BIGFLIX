import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesWatchList, TVShowsWatchlist, removeWatchMovie, removeWatchTvshow } from '../App/MovieSlice'
import MovieComponents from '../Pages/MovieComponents';

const WatchList = () => {
  const dispatch=useDispatch();
  const {WatchListMovies,WatchListTvShows,loadingWatchListTvShows,loadingWatchListMovies,error}=useSelector((state)=>state.Bigflix)
  useEffect(()=>{
  dispatch(MoviesWatchList())
  dispatch(TVShowsWatchlist())
  },[dispatch]);
  const handleDeleteMovie=(movieId)=>{
    dispatch(removeWatchMovie(movieId))
  };
  const handleDeleteTvShow=(tvshowId)=>{
    dispatch(removeWatchTvshow(tvshowId))
  }
  return (
    <div className='text-white'>
      <MovieComponents
            Data={WatchListMovies}
            heading={"Movies WatchList"}
            loading={loadingWatchListMovies}
            error={error}
            trending={false}
            onDelete={handleDeleteMovie}
          />
           <MovieComponents
            Data={WatchListTvShows}
            heading={"TvShows WatchList"}
            loading={loadingWatchListTvShows}
            error={error}
            trending={false}
            onDelete={handleDeleteTvShow}
          />
    </div>
  )
}

export default WatchList