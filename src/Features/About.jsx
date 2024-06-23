import React from 'react';
import '../CSS/About.css';
import Prashanth from "../Assests/Prashanth.jpg"

const About = () => {
  return (
    <div className="profile-card">
    <img src={Prashanth} alt="Profile" className="profile-img" />
    <h2>John Doe</h2>
    <p>Web Developer</p>
    <div className="social-links">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
      </a>
    </div>
  </div>
  );
};

export default About;
