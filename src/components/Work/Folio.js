import React from "react";
import "./Work.css";
import { Link } from "react-router-dom";

const Folio = ({ cname, heading, projectLink }) => {
  return (
    <div class="column folio-item">
      <a href={projectLink} class="folio-item__thumb">
        <p>{heading}</p>
        <div className={`box ${cname}`}></div>
      </a>
    </div>
  );
};

export default Folio;
