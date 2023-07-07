import React from "react";

const ServiveCard = ({ img, title }) => {
  return (
    <div className="servive-card">
      <span>{img}</span>
      <h3>{title}</h3>
    </div>
  );
};

export default ServiveCard;
