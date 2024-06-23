import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OntheAir, RatedTop, TodayAiring, TrendingTv, TvPopular } from '../App/MovieSlice';
import MovieComponents from './MovieComponents';
import { Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const TVSeries = () => {
  const[searchInput,setSearchInput]=useState(" ");
  const[searchData,setSearchData] =useState([]);
    const dispatch=useDispatch();
    const {PopularTv,TopRated,AiringToday,OnAir,TvTrending,loadingAiringToday,loadingOnAir,loadingTvTrending, loadingTvPopular,loadingTopRated, error}=useSelector((state)=>state.Bigflix);
    useEffect(()=>{
        dispatch(TvPopular())
        dispatch(RatedTop())
        dispatch(TodayAiring())
        dispatch(OntheAir())
        dispatch(TrendingTv())
    },[dispatch]);
    const handleSearchData=()=>{
      axios
      .get(`https://api.themoviedb.org/3/search/tv?query=${searchInput}`, {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
           `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmU5MjY4MzgxNzhiZjgxYzY0Y2U1MDQ5ZTk2M2FiMSIsInN1YiI6IjY2NjkyMmU2NzU4MTA2YTRhYWM4MmE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjstLWtw0zJV2ajLKNqhqWBkhfeQzCzOi9kx8alng7M`
    },
      })
      .then((response) => {
        setSearchData(response.data.results);
        setSearchInput("")
      }).catch((error)=>{console.log(error)})}
  
  
  return (
    <div>
       <Form className="d-flex justify-content-center me-5 p-3">
            <Form.Control
              type="Search"
              placeholder="Search"
              className="w-50 ps-2 ms-2"
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
              aria-label="Search"
            />
            <Button onClick={handleSearchData} variant="outline-success">Search</Button>
          </Form>
          {   
        searchData && searchData.length > 0 && (
          <MovieComponents
          Data={searchData}
          heading={"Search Data"}
          loading={loadingTvTrending}
          error={error}
          trending={false}
        />
        ) 
      }
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