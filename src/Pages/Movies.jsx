import React, { useEffect } from "react";
import BannerMovies from "./BannerMovies";
import MovieComponents from "./MovieComponents";
import { useDispatch, useSelector } from "react-redux";
import { MoviePopular, NowPlaying } from "../App/MovieSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const { MoviesData, PlayingNow, loadingNowPlaying,loadingPopular,Popular_Movie, error } = useSelector((state) => state.Bigflix);

  useEffect(() => {
    dispatch(NowPlaying());
    dispatch(MoviePopular())
  }, [dispatch]);

  return (
    <div>
      <BannerMovies />
      <MovieComponents
        Data={MoviesData}
        heading={"Trending Movies"}
        loading={false}
        // here iam not passing any loading because ,iam already passed inside the banner component
        error={error}
        trending={true}
      />
      <MovieComponents
        Data={PlayingNow}
        heading={"Now Playing"}
        loading={loadingNowPlaying}
        error={error}
        trending={false}
      />
      <MovieComponents
        Data={Popular_Movie}
        heading={"Popular_Movie"}
        loading={loadingPopular}
        error={error}
      />
    </div>
  );
};

export default Movies;
