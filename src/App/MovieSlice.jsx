import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import API from "../API";
import axios from "axios";

const API_KEY="f2e926838178bf81c64ce5049e963ab1";
 const  BASE_URL="https://api.themoviedb.org/3";


 export const cinemaData=createAsyncThunk("Bigflix/Movies",async()=>{
    const response = await axios.get(`${BASE_URL}/trending/all/day`, {
        params: {
          api_key: API_KEY
        }
      });
      return response.data.results;
 });

export const NowPlaying=createAsyncThunk("Bigflix/NowPlaying",async()=>{
  const response= await axios.get(`${BASE_URL}/movie/now_playing`,{
    params:{
      api_key:API_KEY
    }
  });
  return response.data.results;
}) 
const initialState={
    MoviesData:[],
    status:"",
    PlayingNow:[],

}
const Bigflix=createSlice({
    name:"Bigflix",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(cinemaData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(cinemaData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.MoviesData = action.payload;
        })
        .addCase(cinemaData.rejected, (state) => {
          state.status = 'failed';
          
        }).addCase(NowPlaying.pending,(state)=>{
          state.status="loading"
        }).addCase(NowPlaying.fulfilled,(state,action)=>{
          state.PlayingNow=action.payload
        }).addCase(NowPlaying.rejected,(state)=>{
          state.status="failed"
        })
    }
})
export default Bigflix.reducer;