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
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </nav>
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Navbar;
