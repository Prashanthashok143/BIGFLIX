import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cinemaData } from "../App/MovieSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "../CSS/BannerMovies.css";

const BannerMovies = () => {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  const BannerData = useSelector((state) => state.Bigflix.MoviesData);
  const loading = useSelector((state) => state.Bigflix.loadingMovies);
  const error = useSelector((state) => state.Bigflix.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cinemaData());
  }, [dispatch]);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -1280,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 1280,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  return (
    <section className="main">
      <div
        ref={scrollContainerRef}
        className="ms-4 gap-5 d-flex scroll-data-none overflow-x-scroll w-100 h-100"
      >
        {BannerData.map(
          ({
            id,
            title,
            name,
            backdrop_path,
            overview,
            vote_average,
            popularity,
          }) => (
            <div key={id} className="banner-movie text-white">
              <img 
                src={`${baseUrl}w1280/${backdrop_path}`}
                srcSet={`${baseUrl}w300/${backdrop_path} 300w, ${baseUrl}w768/${backdrop_path} 780w,${baseUrl}w1280/${backdrop_path} 1280w`}
                sizes="(max-width:480px) 300px ,(max-width: 768px) 768px"
                alt={name ?? title}
               
              />

              <div className="banner-overlay p-3 text-start d-flex flex-column">
                <h1>{title || name}</h1>
                <p>{overview}</p>
                <div className="d-flex justify-content-around align-items-center">
                  <div className="round-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <span>{vote_average.toFixed(1)}</span>
                  </div>
                  <p className="ms-3 mt-3 views">Views: {Math.floor(popularity)}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="text-white d-flex justify-content-between">
        <button className="scroll-button" onClick={scrollLeft}>
          <FaArrowLeft />
        </button>
        <button className="scroll-button" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default BannerMovies;

