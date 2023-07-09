import React from "react";
import { Download } from "react-feather";

const Footer = () => {
  return (
    <div id="footer" className="container footer flex">
      <hr />
      <h1>Tripmate</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
        dolor sit,
      </p>

      <h3>
        <a href="https://gitlab.com/aadarsha07/trip_mate">
          Download Mobile Application <Download />
        </a>
      </h3>

      <p>copy@2023, Tripmate</p>
    </div>
  );
};

export default Footer;
