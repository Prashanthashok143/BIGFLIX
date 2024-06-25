import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../CSS/CastDetails.css";

const CastDetails = () => {
  const [castData, setCastData] = useState([]);
  const location = useLocation();
  const MovieDataDetails = location.state.MovieDataDetails;
  const { id, media_type } = MovieDataDetails; 
  useEffect(() => {
    const fetchCastDetails = async (type) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/credits`,
          {
            params: { language: "en-US", page: "1" },
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmU5MjY4MzgxNzhiZjgxYzY0Y2U1MDQ5ZTk2M2FiMSIsInN1YiI6IjY2NjkyMmU2NzU4MTA2YTRhYWM4MmE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjstLWtw0zJV2ajLKNqhqWBkhfeQzCzOi9kx8alng7M`,
            },
          }
        )
        return response.data.cast;
        
      } catch (error) {
        console.error(`Error fetching ${type} cast details:`, error);
        return null;
      }
    };
    const handleCastDetails = async () => {
      let cast = [];
      if (media_type) {
        // Fetch based on the provided media_type
        const type = media_type === "tv" ? "tv" : "movie";
        cast = await fetchCastDetails(type);
      } else {
        // Try fetching both as movie and tv if media_type is not provided
        cast = await fetchCastDetails("movie");
        if (!cast || cast.length === 0) {
          cast = await fetchCastDetails("tv");
        }
      }
      if (cast) setCastData(cast);
    };

    handleCastDetails();
  }, [id, media_type]);
  let no = 1;
  return (
    <div>
      <h1 className="text-white text-start">Cast</h1>
      <div className="cast-details scroll-data-none text-white">
        {castData.length > 0 &&
          castData.map((member) => (
            <div
              key={`${member.id}+${media_type}+${no++}`}
              className="cast-member"
            >
              <img
                src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
                alt={member.profile_path ? member.name:"no image found"}
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
  );
};

export default CastDetails;
