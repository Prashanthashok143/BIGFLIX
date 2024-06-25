import React, { useEffect} from 'react'
import MovieComponents from '../Pages/MovieComponents';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesFavourite, TvshowsFavourite, removeFavouriteMovie, removeFavouriteTvShow } from '../App/MovieSlice';

const FavouriteList = () => {
    
    const dispatch=useDispatch();
    const {FavouriteMovie,FavouriteTvShows,loadingFavouriteMovie,loadingFavouriteTvShows,error}=useSelector((state)=>state.Bigflix)
   
    useEffect(()=>{
         dispatch(MoviesFavourite())
         dispatch(TvshowsFavourite())
    },[dispatch]);

    const handleDeleteMovie=(movieId)=>{
      dispatch(removeFavouriteMovie(movieId))
    }
    const handleDeleteTvShow=(tvshowId)=>{
      dispatch(removeFavouriteTvShow(tvshowId))
    }
  return (
    <div className='text-white'>FavouriteList
       <MovieComponents
            Data={FavouriteMovie}
            heading={"Favourite Movies"}
            loading={loadingFavouriteMovie}
            error={error}
            trending={false}
            onDelete={handleDeleteMovie}
          />
           <MovieComponents
            Data={FavouriteTvShows}
            heading={"Favourite TvShows"}
            loading={loadingFavouriteTvShows}
            error={error}
            trending={false}
            onDelete={handleDeleteTvShow}
          />
    </div>
  )
}

export default FavouriteList