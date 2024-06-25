import React from 'react';
import '../CSS/About.css';
import Prashanth from "../Assests/SP.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';



const About = () => {
  return (
    <div className="profile-card">
    <img src={Prashanth} alt="Profile" className="profile-img" />
    <h2>Prashanth Shanigarapu</h2>
    <p>Web Developer</p>
    <div className="social-links">
    
   
        <Link
          to={"https://github.com/Prashanthashok143"}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        <Link to={"https://www.linkedin.com/in/prashanthshanigarapu"} className="twitter social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
        <Link
         to={"https://www.instagram.com/prashanthashok_143/"}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
        <Link
          to={"https://www.facebook.com/prashanthkumarsamudrala.prashanthkumar/" }
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
      
       
   
 </div>
  </div>
  );
};

export default About;
