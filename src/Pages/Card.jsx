import React, { memo } from 'react';
import "../CSS/Card.css"
import { useNavigate } from 'react-router-dom';

const Card = ({ data, trending, index }) => {
  const navigate=useNavigate()
  const passMovieDetails=()=>{
    const {name, adult,backdrop_path,
      id,
      media_type,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
      vote_count} =data;
    const MovieDataDetails={name,adult,
      backdrop_path,
      id,
      media_type,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
      vote_count}
    navigate(`/MovieDetails/${data.id}`,{state:{
      MovieDataDetails
    }})
  }
  return (
    <div className="card-container" onClick={()=>passMovieDetails(data.adult,
      data.backdrop_path,
      data.id,
      data.media_type,
      data.original_language,
      data.original_title,
      data.overview,
      data.popularity,
      data.poster_path,
      data.release_date,
      data.title,
      data.name,
      data.vote_average,
      data.vote_count)}>
      <div to={`/${data.title || data.name}/${data.id}`} className='text-white overflow-hidden p-3 position-relative d-block' style={{ textDecoration: "none", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt="" className="mb-2" style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
       <div style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}} >
       <p className="mb-1">{data.title || data.name}</p>
       <p className="mb-1">{data.release_date || data.first_air_date}</p>
       </div>
        {trending && (
          <div className='position-absolute top-0 start-0 mt-4 ms-2 px-2  py-1  rounded-end' style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
            #{index} Trending
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Card);
