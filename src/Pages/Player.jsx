import React from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import KalkiTrailer from "../Assests/Kalki 2898 AD Trailer - Telugu _ Prabhas _ Amitabh Bachchan _ Kamal Haasan _ Deepika _ Nag Ashwin.mp4"
import { useNavigate } from 'react-router-dom';
const Player = () => {
    const navigate=useNavigate();
  return (
    <div>
      <div className='d-flex justify-content-start' onClick={()=>navigate("/")}>
      <span className='text-info bg-dark'><FaArrowAltCircleLeft /></span>
      </div>
      <video src={KalkiTrailer} autoPlay muted controls className='h-100 w-100'></video>
     
    </div>
  )
}

export default Player