import React from "react";
import "./Work.css";
import { Link } from "react-router-dom";

const Folio = ({ image, heading, projectLink }) => {
  return (
    <div class="column folio-item">
      <a href={projectLink} class="folio-item__thumb">
        <p>{heading}</p>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default Folio;
