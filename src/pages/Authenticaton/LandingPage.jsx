import React from "react";
import Navbar from "../../components/landingPage/Navbar";
import hero from "../../assets/hero.png";
import Services from "../../components/landingPage/Services";
import About from "../../components/landingPage/about";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <div className=" flex container hero">
        <h1>
          Get connected to the
          <br /> best travellers
        </h1>
        <img src={hero} alt="hero" />
      </div>
      <Services />
      <About />
      <h1>Footer</h1>
    </main>
  );
};

export default LandingPage;
