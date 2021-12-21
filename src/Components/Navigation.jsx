import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="main">
      {/* font awosomesite */}
      <link
        rel="stylesheet"
        href="
         https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div className="nav">
        <Link to="/">
          <i className="fas fa-home"></i> <span>Home</span>
        </Link>

        <Link to="/about">
          <i className="fas fa-user"></i> <span>About</span>
        </Link>

        <Link to="/portfilio">
          <i className="fas fa-briefcase"></i> <span>Portfilio</span>
        </Link>
        <Link to="/resume">
          <i className="fas fa-file"></i> <span>Resume</span>
        </Link>

        <Link to="/contact">
          <i className="fas fa-address-book"></i> <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
