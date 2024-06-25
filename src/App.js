import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Player from './Pages/Player';
import Footer from './Pages/Footer';
import Movies from './Pages/Movies';
import MovieDetails from './Features/MovieDetails';
import TVSeries from './Pages/TVSeries';
import About from './Features/About';
import WatchList from './Features/WatchList';
import FavouriteList from './Features/FavouriteList';
import { createContext, useState } from 'react';
import NoPage from './Pages/NoPage';


export const UsernameProvider=createContext(null);
function App() {
  //  const LogInOut=localStorage.getItem("Username") !== null;
  const[authenticate,setAuthenticate] =useState(false);
  const UsernamePassing={authenticate,setAuthenticate};
  return (
    <div className="App">
  
<UsernameProvider.Provider value={UsernamePassing}>
<BrowserRouter>
    <NavBar/>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/player' element={<Player/>}/>
  {
    ! authenticate && (
      <Route path='/login' element={<Login/>}/>
    )
  }
      <Route path='/about' element={<About/>}/>
   {
    authenticate && (
      <>
           
      
     <Route path='/movies' element={<Movies/>}/>
     <Route path='/tvseries' element={<TVSeries/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/watchlist' element={<WatchList/>}/>
     <Route path='/favouritelist' element={<FavouriteList/>}/>

     <Route path='/MovieDetails/:id' element={<MovieDetails/>}/>
     

      </>
    )
   }

  
<Route path="*" element={<NoPage/>}/>
    </Routes>
   <Footer/>
    </BrowserRouter> 
</UsernameProvider.Provider>

   
    </div>
  );
}

export default App;
