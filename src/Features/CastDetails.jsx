import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios";
import "../CSS/CastDetails.css";

const CastDetails = () => {
    const[castData,setCastData]=useState([])
    const location = useLocation();
    const MovieDataDetails = location.state.MovieDataDetails;
    const {id,media_type} = MovieDataDetails;

    const handleCastDetails = () => {
      let movie="movie";
        axios
          .get(`https://api.themoviedb.org/3/${media_type || movie}/${id}/credits`, {
            params: { language: "en-US", page: "1" },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
            },
          })
          .then((response) => {
            setCastData(response.data.cast);
          }).catch((error)=>{console.log(error)})
      };
    
      useEffect(()=>{
        handleCastDetails();
      },[])
  return (
    <div>
       <h1 className='text-white text-start'>Cast</h1>
    <div className="cast-details scroll-data-none text-white">
     
    {castData.map((member) => (
      <div key={member.id} className="cast-member">
        <img 
          src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`} 
          alt={member.name} 
          className="cast-profile"
        />
        <div className="cast-info">
          <p>Name:{member.name}</p>
          <p className="cast-character">Character:{member.character}</p>
        </div>
      </div>
    ))}
     </div>
  </div>
  )
}

export default CastDetails