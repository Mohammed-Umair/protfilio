import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="body">
      <div className="img">
        <img src="man.png" alt="" />
      </div>
      <div className="text">
        <div className="content">
          <h1>hi ,i am MOHAMMED UMAIR</h1>
          <span>front-end developer</span>
          <p>. . . . . . . . . . . . . </p>

          <a href="resume.pdf" download="umair">   
            Download CV <i className="fas fa-cloud-arrow-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
