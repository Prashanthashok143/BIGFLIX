import React from 'react';
import '../CSS/ProfileIcon.css';
import Prashanth from "../Assests/Prashanth.jpg";
import { useNavigate } from 'react-router-dom';

const ProfileIcon = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate("/about")} className="profile-icon mb-3" style={{ width: 50, height: 50 }}>
      <img src={Prashanth} alt="Profile" className="profile-image" />
    </div>
  );
};

export default ProfileIcon;
