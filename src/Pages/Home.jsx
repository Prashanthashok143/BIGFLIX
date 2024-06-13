import React from 'react';
import kalki from "../Assests/Kalki.avif";
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import "../CSS/Home.css"
import { useNavigate } from 'react-router-dom';
import FAQs from "./FAQs";
import Button from 'react-bootstrap/Button';
const Home = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="kalkiposter">
      <img src={kalki} alt="kalki" className="kalkiposter" />
      <div className="buttons">
        <button className="btn btn-danger play m-2 p-2 btn-lg btn-sm" onClick={()=>navigate("/player")}><FaPlay /> Play</button>
        <button className="btn btn-light moreInfo m-2 p-2 btn-sm"><MdOutlineInfo /> More Info</button>
      </div>
      </div>
      <div className='text-white'>
        <h1>The Best Streaming Experience</h1>
        <p className='text-start m-3 ps-3'>Bigflix offers the ultimate streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With Bigflix, you can enjoy a vast library of content, including the latest blockbusters, classic films, popular TV shows, and more. Our platform ensures high-quality streaming with minimal buffering, making your viewing experience seamless and enjoyable.</p>
        <p>Join Bigflix today and elevate your streaming experience with unparalleled convenience, quality, and choice. Enjoy your favorite movies and shows like never before, with Bigflix!</p>
        <Button variant="danger" className='w-25 m-3' onClick={()=>navigate("/login")}>Login To Explore More</Button>
      </div>
     <FAQs/>
    </div>
  )
}

export default Home