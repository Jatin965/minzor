import React, { useEffect } from "react";

import "../../App.css";

import main from "../../lib/main.min";

import { Card, makeStyles, Typography } from "@material-ui/core";

const Couersal = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = { main };
  //   script.async = true;

  //   document.body.appendChild(script);
  // }, []);

  return (
    <div className="body-wrap">
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <Typography
                color="secondary"
                variant="h1"
                className="hero-title mt-0"
              >
                Greetings from <span>Minzor!</span>
              </Typography>
              <Typography
                color="secondary"
                variant="p"
                className="hero-paragraph"
              >
                We are an innovative team of experienced and determined
                professionals with global reach. We offer unparalleled Business
                Intelligence, Consulting, Staffing, Outsourcing and Training
                Domain services across countries. We specialize in
                Infrastructural Services and Talent Management solutions.
              </Typography>
            </div>
            <div className="hero-figure anime-element">
              <svg
                className="placeholder"
                width="528"
                height="396"
                viewBox="0 0 528 396"
              >
                <rect
                  width="528"
                  height="396"
                  style={{ fill: "transparent" }}
                />
              </svg>
              <div
                className="hero-figure-box hero-figure-box-01"
                datarotation="45deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-02"
                datarotation="-45deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-03"
                datarotation="0deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-04"
                datarotation="-135deg"
              ></div>
              <div className="hero-figure-box hero-figure-box-05"></div>
              <div className="hero-figure-box hero-figure-box-06"></div>
              <div className="hero-figure-box hero-figure-box-07"></div>
              <div
                className="hero-figure-box hero-figure-box-08"
                datarotation="-22deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-09"
                datarotation="-52deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-10"
                datarotation="-50deg"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Couersal;
