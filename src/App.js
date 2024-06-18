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

function App() {
  return (
    <div className="App">
  
 <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/player' element={<Player/>}/>
     <Route path='/movies' element={<Movies/>}/>
     <Route path='/tvseries' element={<TVSeries/>}/>
     <Route path='/MovieDetails/:id' element={<MovieDetails/>}/>


  
    
    </Routes>
   <Footer/>
    </BrowserRouter> 

   
    </div>
  );
}

export default App;
