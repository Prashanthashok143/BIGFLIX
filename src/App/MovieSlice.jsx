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
export const MoviesFavourite=createAsyncThunk("Bigflix/MoviesFavouriteList",async()=>{
  const response =await axios.get(`https://bigflix-jsonserver-143.onrender.com/MoviesFavourite`);
  return response.data;
})
export const TvshowsFavourite=createAsyncThunk("Bigflix/TvshowsFavouriteList",async()=>{
  const response=await axios.get(`https://bigflix-jsonserver-143.onrender.com/TVShowsFavourite`);
  return response.data;
})
export const MoviesWatchList=createAsyncThunk("Bigflix/MoviesWatchList",async()=>{
  const response=await axios.get(`https://bigflix-jsonserver-143.onrender.com/MoviesWatchlist`);
  return response.data;
})
export const TVShowsWatchlist =createAsyncThunk("Biglix/TvShowsWatchlist",async()=>{
  const response=await axios.get(`https://bigflix-jsonserver-143.onrender.com/TVShowsWatchlist`);
  return response.data;
})
export const  removeFavouriteMovie=createAsyncThunk("Bigflix/ removeFavouriteMovie",async(movieId)=>{
  await axios.delete(`https://bigflix-jsonserver-143.onrender.com/MoviesFavourite/${movieId}`);
  return movieId;
})
export const removeFavouriteTvShow=createAsyncThunk("Bigflix/removeFavouriteTvShow",async(tvshowId)=>{
  await axios.delete(`https://bigflix-jsonserver-143.onrender.com/TVShowsFavourite/${tvshowId}`);
  return tvshowId;
})
export const removeWatchMovie=createAsyncThunk("Bigflix/removeWatchlistMovie",async(movieId)=>{
  await axios.delete(`https://bigflix-jsonserver-143.onrender.com/MoviesWatchlist/${movieId}`);
  return movieId;
})
export const removeWatchTvshow=createAsyncThunk("Bigflix/removeWatchTvshow",async(tvshowId)=>{
  await axios.delete(`https://bigflix-jsonserver-143.onrender.com/TVShowsWatchlist/${tvshowId}`);
  return tvshowId;
})
const initialState = {
  MoviesData: [],
  PlayingNow: [],
  Popular_Movie: [],
  PopularTv:[],
  TopRated:[],
  AiringToday:[],
  OnAir:[],
  TvTrending:[],
  FavouriteMovie:[],
  FavouriteTvShows:[],
  WatchListMovies:[],
  WatchListTvShows:[],
  loadingMovies: false,
  loadingNowPlaying: false,
  loadingPopular: false, 
  loadingTvPopular:false,
  loadingTopRated:false,
  loadingAiringToday:false,
  loadingOnAir:false,
  loadingTvTrending:false,
  loadingFavouriteMovie:false,
  loadingFavouriteTvShows:false,
  loadingWatchListMovies:false,
  loadingWatchListTvShows:false,
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
      .addCase(MoviesFavourite.pending,(state)=>{
        state.loadingFavouriteMovie=true;
        state.error=null;
      })
      .addCase(MoviesFavourite.fulfilled,(state,action)=>{
        state.loadingFavouriteMovie=false;
        state.FavouriteMovie=action.payload;
      })
      .addCase(MoviesFavourite.rejected,(state,action)=>{
        state.loadingFavouriteMovie=false;
        state.error=action.error.message;
      })
      .addCase(TvshowsFavourite.pending,(state)=>{
        state.loadingFavouriteTvShows=true;
        state.error=null;
      })
      .addCase(TvshowsFavourite.fulfilled,(state,action)=>{
        state.loadingFavouriteTvShows=false;
        state.FavouriteTvShows=action.payload;
      })
      .addCase(TvshowsFavourite.rejected,(state,action)=>{
        state.loadingFavouriteTvShows=false;
        state.error=action.error.message;
      })
      .addCase(MoviesWatchList.pending,(state)=>{
        state.loadingWatchListMovies=true;
        state.error=null;
      })
      .addCase(MoviesWatchList.fulfilled,(state,action)=>{
        state.loadingWatchListMovies=false;
        state.WatchListMovies=action.payload;
      })
      .addCase(MoviesWatchList.rejected,(state,action)=>{
        state.loadingWatchListMovies=false;
        state.error=action.error.message;
      })
      .addCase(TVShowsWatchlist.pending,(state)=>{
        state.loadingWatchListTvShows=true;
        state.error=null;
      })
      .addCase(TVShowsWatchlist.fulfilled,(state,action)=>{
        state.loadingWatchListTvShows=false;
        state.WatchListTvShows =action.payload;
      })
      .addCase(TVShowsWatchlist.rejected,(state,action)=>{
        state.loadingWatchListTvShows=false;
        state.error=action.error.message;
      })
      .addCase(removeFavouriteMovie.fulfilled,(state,action)=>{
        state.FavouriteMovie=state.FavouriteMovie.filter(movie=> movie.id!== action.payload)
      })
      .addCase(removeFavouriteTvShow.fulfilled,(state,action)=>{
        state.FavouriteTvShows=state.FavouriteTvShows.filter(tvshow=>tvshow.id !== action.payload)
      })
      .addCase(removeWatchMovie.fulfilled,(state,action)=>{
        state.WatchListMovies=state.WatchListMovies.filter(movie=>movie.id !== action.payload)
      })
      .addCase(removeWatchTvshow.fulfilled,(state,action)=>{
        state.WatchListTvShows=state.WatchListTvShows.filter(tvshow=>tvshow.id !== action.payload)
      })
  }
});

export default Bigflix.reducer;
