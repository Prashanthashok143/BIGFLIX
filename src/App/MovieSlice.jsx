import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const authHeader = {
  accept: "application/json",
  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmU5MjY4MzgxNzhiZjgxYzY0Y2U1MDQ5ZTk2M2FiMSIsInN1YiI6IjY2NjkyMmU2NzU4MTA2YTRhYWM4MmE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjstLWtw0zJV2ajLKNqhqWBkhfeQzCzOi9kx8alng7M`
};

export const cinemaData = createAsyncThunk(
  "Bigflix/Movies",
  async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      headers: authHeader
    });
    return response.data.results;
  }
);

export const NowPlaying = createAsyncThunk(
  "Bigflix/NowPlaying",
  async () => {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      headers: authHeader
    });
    return response.data.results;
  }
);

export const MoviePopular = createAsyncThunk(
  "Bigflix/PopularMovies",
  async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      headers: authHeader
    });
    return response.data.results;
  }
);

export const TvPopular = createAsyncThunk("Bigflix/PopularTv",async()=>{
  const response=await axios.get(`${BASE_URL}/tv/popular`,{
    headers:authHeader
  });
  return response.data.results;
});

export const RatedTop=createAsyncThunk("Bigflix/TopRated",async()=>{
 const response=await axios.get(`${BASE_URL}/tv/top_rated`,{
     headers:authHeader
 });
return response.data.results;
});

export const TodayAiring=createAsyncThunk("Bigflix/airingToday",async()=>{
  const response=await axios.get(`${BASE_URL}/tv/airing_today`,{
    headers:authHeader,
  })
  return response.data.results;
});

export const OntheAir=createAsyncThunk("Bigflix/OntheAir",async()=>{
  const response=await axios.get(`${BASE_URL}/tv/on_the_air`,{
    headers:authHeader,
  })
  return response.data.results;
});
export const TrendingTv=createAsyncThunk("Bigflix/TrendingTv",async()=>{
  const response=await axios.get(`${BASE_URL}/trending/tv/day`,{
    headers:authHeader,
  })
  return response.data.results;
});
const initialState = {
  MoviesData: [],
  PlayingNow: [],
  Popular_Movie: [],
  PopularTv:[],
  TopRated:[],
  AiringToday:[],
  OnAir:[],
  TvTrending:[],
  loadingMovies: false,
  loadingNowPlaying: false,
  loadingPopular: false, 
  loadingTvPopular:false,
  loadingTopRated:false,
  loadingAiringToday:false,
  loadingOnAir:false,
  loadingTvTrending:false,
  error: null,
};

const Bigflix = createSlice({
  name: "Bigflix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cinemaData.pending, (state) => {
        state.loadingMovies = true;
        state.error = null;
      })
      .addCase(cinemaData.fulfilled, (state, action) => {
        state.loadingMovies = false;
        state.MoviesData = action.payload;
      })
      .addCase(cinemaData.rejected, (state, action) => {
        state.loadingMovies = false;
        state.error = action.error.message;
      })
      .addCase(NowPlaying.pending, (state) => {
        state.loadingNowPlaying = true;
        state.error = null;
      })
      .addCase(NowPlaying.fulfilled, (state, action) => {
        state.loadingNowPlaying = false;
        state.PlayingNow = action.payload;
      })
      .addCase(NowPlaying.rejected, (state, action) => {
        state.loadingNowPlaying = false;
        state.error = action.error.message;
      })
     .addCase(MoviePopular.pending, (state) => {
        state.loadingPopular = true;
        state.error = null;
      })
      .addCase(MoviePopular.fulfilled, (state, action) => {
        state.loadingPopular = false;
        state.Popular_Movie = action.payload;
      })
      .addCase(MoviePopular.rejected, (state, action) => {
        state.loadingPopular = false;
        state.error = action.error.message;
      })
      .addCase(TvPopular.pending,(state)=>{
        state.loadingTvPopular=true;
        state.error=null;
      })
      .addCase(TvPopular.fulfilled,(state,action)=>{
        state.loadingTvPopular=false;
        state.PopularTv=action.payload
      })
      .addCase(TvPopular.rejected,(state,action)=>{
        state.loadingTvPopular=false;
        state.error=action.error.message
      })
      .addCase(RatedTop.pending,(state)=>{
        state.loadingTopRated=true;
        state.error=null;
      })
      .addCase(RatedTop.fulfilled,(state,action)=>{
        state.loadingTopRated=false;
        state.TopRated=action.payload;
      })
      .addCase(RatedTop.rejected,(state,action)=>{
        state.loadingTopRated=false;
        state.error=action.error.message;
      })
      .addCase(TodayAiring.pending,(state)=>{
        state.loadingAiringToday=true;
        state.error=null;
      })
      .addCase(TodayAiring.fulfilled,(state,action)=>{
        state.loadingAiringToday=false;
        state.AiringToday=action.payload;
      })
      .addCase(TodayAiring.rejected,(state,action)=>{
        state.loadingAiringToday=false;
        state.error=action.error.message
      })
      .addCase(OntheAir.pending,(state)=>{
        state.loadingOnAir=true;
        state.error=null;
      })
      .addCase(OntheAir.fulfilled,(state,action)=>{
        state.loadingOnAir=false;
        state.OnAir=action.payload;
      })
      .addCase(OntheAir.rejected,(state,action)=>{
        state.loadingOnAir=false;
        state.error=action.error.message
      })
      .addCase(TrendingTv.pending,(state)=>{
        state.loadingTvTrending=true;
        state.error=null;
      })
      .addCase(TrendingTv.fulfilled,(state,action)=>{
        state.loadingTvTrending=false;
        state.TvTrending=action.payload;
      })
      .addCase(TrendingTv.rejected,(state,action)=>{
        state.loadingTvTrending=false;
        state.error=action.error.message;
      })
  }
});

export default Bigflix.reducer;
