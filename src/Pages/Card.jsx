// Card.jsx
import React, { memo } from 'react';
import "../CSS/Card.css";
import { GrClose } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Card = ({ data, trending, index, onDelete }) => {
  const navigate = useNavigate();

  const passMovieDetails = () => {
    const { 
      name, adult, backdrop_path, id, media_type, 
      original_language, original_title, overview, 
      popularity, poster_path, release_date, title, 
      vote_average, vote_count 
    } = data;

    const MovieDataDetails = {
      name, adult, backdrop_path, id, media_type, 
      original_language, original_title, overview, 
      popularity, poster_path, release_date, title, 
      vote_average, vote_count 
    };

    navigate(`/MovieDetails/${data.id}`, {
      state: { MovieDataDetails }
    });
  }

  const handleDelete = (event) => {
    event.stopPropagation(); 
    // Prevent the card click event
    onDelete(data.id);
    console.log(data.id)
  }

  return (
    <div className='main-div'>
      <div 
        className="card-container" 
        onClick={passMovieDetails}
      >
        <div 
          className='text-white overflow-hidden p-3 position-relative d-block' 
          style={{ textDecoration: "none", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          {
            data.poster_path ? (
              <img 
            src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} 
            alt="" 
            className="mb-2 image" 
            style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} 
          />
            ) : (
              <div className='p-5  text-start mt-5'>
                <h1>☹</h1>
                  <h1 className='fs-6'>Image not found</h1>
           
                </div>
           )
          }
          <div className='movie-name-info' style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            <p className="mb-1">{data.title || data.name}</p>
            <p className="mb-1">{data.release_date || data.first_air_date}</p>
          </div>
          {trending && (
            <div 
              className='position-absolute top-0 start-0 mt-4 ms-2 px-2 py-1 rounded-end' 
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              #{index} Trending
            </div>
          )}
        </div>
        {onDelete && (
          <button 
            className='delete-btn' 
            onClick={handleDelete}
          >
            <GrClose />
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(Card);
