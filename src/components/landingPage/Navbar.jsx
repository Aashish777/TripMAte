import React from "react";
import travel from "../../assets/travel.png";

const Navbar = () => {
  return (
    <header className="container navbar">
      <div className="flex">
        <span className="flex navbar-span">
          <img src={travel} alt="travel" />
          <h1>TripMate</h1>
        </span>
        <nav>
          <ul className="flex  navbar-nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <button>
          <a href="#footer"> Download Application</a>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
