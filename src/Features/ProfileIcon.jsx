import React, { useContext } from 'react';
import '../CSS/ProfileIcon.css';
import Prashanth from "../Assests/Prashanth.jpg";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { UsernameProvider } from '../App';
const ProfileIcon = () => {
  const {authenticate,setAuthenticate} =useContext(UsernameProvider)
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.clear("Username");
    setAuthenticate(false)
  }
  return (
    <div className='d-flex gap-2 align-items-center'>
    {authenticate && (
      <h1 className='mb-4'>
        <Link to="/" onClick={handleLogout} className="nav-link">
        <svg fill="none" className='text-white' height="38" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
        </Link>
      </h1>
    )}
    <div onClick={() => navigate("/about")} className="profile-icon mb-3 ms-2" style={{ width: 50, height: 50 }}>
      <img src={Prashanth} alt="Profile" className="profile-image" />
    </div>
  </div>
  );
};

export default ProfileIcon;
