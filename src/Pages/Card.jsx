import React, { memo } from 'react';
import { Link } from 'react-router-dom';
const Card = ({data,trending,index}) => {
  return (
    <Link to={`/${data.title || data.name}/${data.id}`} style={{textDecoration:"none",backgroundColor:"rgba(0, 0, 0, 0.5)"}} className='text-white overflow-hidden p-3 position-relative'>
     <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt="" />
    <p>{data.title || data.name}</p>
    <p>{data.release_date || data.first_air_date}</p>
    <div className='position-absolute top-0 mt-4 p-1 rounded-end' style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
    {
        trending &&(
            <div>
                #{index} Trending
            </div>
        )
    }
    </div>
  
    </Link>
  )
}

export default memo(Card)