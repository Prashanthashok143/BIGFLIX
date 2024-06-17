import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Player from './Pages/Player';
import Footer from './Pages/Footer';
import Movies from './Pages/Movies';

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
  
    
    </Routes>
   <Footer/>
    </BrowserRouter> 

   
    </div>
  );
}

export default App;
