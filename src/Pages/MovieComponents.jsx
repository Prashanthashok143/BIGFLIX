import React, { memo, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "../CSS/BannerMovies.css";

import Card from "./Card";

const MovieComponents = ({ Data = [], heading }) => {
    
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500,
        // Adjust this value to control the scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
        // Adjust this value to control the scroll amount
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <h1 className="text-white">{heading}</h1>
      <div className="text-white scroll-data-none  overflow-x-scroll" ref={scrollContainerRef}>
        <div className="d-flex">
          <div className="d-flex">
            {Data.map((data, index) => (
              <Card data={data} index={index + 1} trending={true} key={index} />
            ))}
          </div>
       
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

export default memo(MovieComponents);
