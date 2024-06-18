import React, { memo, useRef} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../CSS/BannerMovies.css";
import Card from "./Card";
import PropTypes from 'prop-types';

const MovieComponents = ({ Data = [], heading, loading, error,trending }) => {
  const scrollContainerRef = useRef(null);


  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
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

  if (!Data.length) {
    return <div className="text-white">No {heading} available.</div>;
  }

  return (
    <div>
      <h1 className="text-white">{heading}</h1>
      <div className="scroll-container text-white scroll-data-none overflow-x-scroll" ref={scrollContainerRef}>
        <div className="d-flex">
        
          {Data.map((data, index) => (
            <Card data={data} index={index + 1} trending={trending} key={index}/>
          ))}
        </div>
       
      </div>
      <div className="text-white d-flex mt-5 justify-content-between">
         
          <button className="scroll-button" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
        
          <button className="scroll-button" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        
      </div>
    </div>
  );
};

MovieComponents.propTypes = {
  Data: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default memo(MovieComponents);
