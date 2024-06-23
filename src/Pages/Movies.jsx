import React, { useEffect, useState } from "react";
import BannerMovies from "./BannerMovies";
import MovieComponents from "./MovieComponents";
import { useDispatch, useSelector } from "react-redux";
import { MoviePopular, NowPlaying } from "../App/MovieSlice";
import { Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from "axios";

const Movies = () => {
  const[searchInput,setSearchInput]=useState(" ");
  const[searchData,setSearchData] =useState([]);
  const dispatch = useDispatch();
  const { MoviesData, PlayingNow, loadingNowPlaying,loadingPopular,Popular_Movie, error } = useSelector((state) => state.Bigflix);

  useEffect(() => {
    dispatch(NowPlaying());
    dispatch(MoviePopular())
  }, [dispatch]);
const handleSearchData=()=>{
  axios
  .get(`https://api.themoviedb.org/3/search/movie?query=${searchInput}`, {
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
            loading={loadingNowPlaying}
            error={error}
            trending={false}
          />
        ) 
      }
      

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
