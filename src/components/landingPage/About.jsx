import React from "react";
import ServiveCard from "./ServiveCard";
import meet from "../../assets/meet1.png";
import verified from "../../assets/verified.png";
import ios from "../../assets/ios.png";

const About = () => {
  return (
    <div className="container about">
      <h1>About</h1>
      <p>
        Our tripmate app connects adventurous travellers from around the world
        by matching them based on shared interests, destinations, and schedules.
        This digital platform is designed to help users plan and book their
        dream trip and make connections with like-minded travellers. With a
        user-friendly interface and a wide range of features and services, our
        app makes it easy for travellers to find the perfect travel companion or
        join an existing group. According to a recent survey, nearly half of all
        travellers prefer to travel with a companion, and our app helps them do
        just that. From the moment you download the app to the moment you return
        home; we'll be there to help you every step of the way. Don't travel
        alone, join us and make new friends on your journey of lifetime.
      </p>
      <hr />
      <div className="flex about">
        <div>
          <ServiveCard
            img={<img src={meet} />}
            title="Meet people from all over the Nepal"
          />
        </div>
        <div>
          <ServiveCard
            img={<img src={verified} />}
            title="Verified profile you can trust"
          />
        </div>
        <div>
          <ServiveCard
            img={<img src={ios} />}
            title="Mobile application for andriod and IOS"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
