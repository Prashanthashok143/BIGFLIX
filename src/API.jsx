import axios from 'axios';

// Create an Axios copy
const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmU5MjY4MzgxNzhiZjgxYzY0Y2U1MDQ5ZTk2M2FiMSIsInN1YiI6IjY2NjkyMmU2NzU4MTA2YTRhYWM4MmE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjstLWtw0zJV2ajLKNqhqWBkhfeQzCzOi9kx8alng7M` 
    // Replace with  access token
  },
  params: {
    api_key: 'f2e926838178bf81c64ce5049e963ab1' 
    // Replace with  actual API key 
  }
});

export default API;
