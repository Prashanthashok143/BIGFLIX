import React, { useEffect } from "react";
import BannerMovies from "./BannerMovies";
import MovieComponents from "./MovieComponents";
import { useDispatch, useSelector } from "react-redux";
import { NowPlaying } from "../App/MovieSlice";

const Movies = () => {
  const disptach = useDispatch();
  const TrendingData = useSelector((state) => state.Bigflix.MoviesData);
  const Now_Playing = useSelector((state) => state.Bigflix.PlayingNow);
  useEffect(() => {
    disptach(NowPlaying());
  });
  return (
    <div>
      <BannerMovies />

      <MovieComponents
        Data={TrendingData}
        heading={"Trending Movies"}
        tren
        ding={true}
      />
      <MovieComponents
        Data={Now_Playing}
        heading={"Now_Playing"}
        trending={false}
      />
    </div>
  );
};

export default Movies;
