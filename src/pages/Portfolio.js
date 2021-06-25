import React from "react";

import Port from "../components/Work/Port";

const Portfolio = () => {
  return (
    <div
      style={{
        "font-family": "Comfortaa",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        margin: "50px 0",
        color: "#0d152a",
      }}
    >
      <h1
        style={{
          color: "#0d152a",
          "font-size": "3rem",
          margin: "0px",
          padding: "0px",
        }}
      >
        Our Work
      </h1>
      <p
        style={{
          color: "#0d152a",
          "font-size": "1rem",
          marginBottom: 20,
          padding: 0,
        }}
      >
        Work we have done so far.
      </p>
      <Port />
    </div>
  );
};

export default Portfolio;
