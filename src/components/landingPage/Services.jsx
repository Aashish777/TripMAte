import React from "react";
import explore from "../../assets/explore.png";
import destination from "../../assets/destination.png";
import create from "../../assets/create.png";
const Services = () => {
  return (
    <div className="container services">
      <h1>Our services</h1>
      <div>
        <div className="flex explore">
          <nav>
            <h3> Explore travel</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              illum blanditiis soluta delectus incidunt distinctio at
              consequatur voluptatibus! Magni, nulla. Adipisci quia dolor, vel
              obcaecati voluptates suscipit cum debitis quasi.
            </p>
          </nav>
          <span>
            <img src={explore} alt="" />
          </span>
        </div>
        <div className="flex destination">
          <span>
            <img src={destination} alt="" />
          </span>
          <nav>
            <h3>Explore destination</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              officia odio inventore. Saepe ipsa quia ducimus quo enim
              asperiores id ipsam eaque fuga, dicta odit dolore, aspernatur ad
              molestias obcaecation
            </p>
          </nav>
        </div>
        <div className="flex explore">
          <nav>
            <h3>Create new trip</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              saepe ratione soluta, vero laudantium natus eum, ad illum eos,
              iste a! Delectus placeat ratione quibusdam at! Ea, ratione
              eligendi. Est?
            </p>
          </nav>
          <span>
            <img src={create} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
