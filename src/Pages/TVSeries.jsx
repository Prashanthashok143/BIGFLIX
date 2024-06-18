import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OntheAir, RatedTop, TodayAiring, TrendingTv, TvPopular } from '../App/MovieSlice';
import MovieComponents from './MovieComponents';

const TVSeries = () => {
    const dispatch=useDispatch();
    const {PopularTv,TopRated,AiringToday,OnAir,TvTrending,loadingAiringToday,loadingOnAir,loadingTvTrending, loadingTvPopular,loadingTopRated, error}=useSelector((state)=>state.Bigflix);
    useEffect(()=>{
        dispatch(TvPopular())
        dispatch(RatedTop())
        dispatch(TodayAiring())
        dispatch(OntheAir())
        dispatch(TrendingTv())
    },[dispatch]);
    console.log(PopularTv)
  
  return (
    <div>
         <MovieComponents
        Data={TvTrending}
        heading={"TV Trending"}
        loading={loadingTvTrending}
        error={error}
        trending={true}
      />
         <MovieComponents
        Data={PopularTv}
        heading={"TV Popular"}
        loading={loadingTvPopular}
        error={error}
        trending={false}
      />
         <MovieComponents
        Data={TopRated}
        heading={"TV TopRated"}
        loading={loadingTopRated}
        error={error}
        trending={false}
      />
       <MovieComponents
        Data={AiringToday}
        heading={"Airing_Today"}
        loading={loadingAiringToday}
        error={error}
        trending={false}
      />
       <MovieComponents
        Data={OnAir}
        heading={"On_The_Air"}
        loading={loadingOnAir}
        error={error}
        trending={false}
      />
     
    </div>
  )
}

export default TVSeries