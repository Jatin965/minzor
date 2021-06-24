import React, { useEffect } from "react";

import "../../App.css";

import main from "../../lib/main";

import { Card, makeStyles, Typography } from "@material-ui/core";

const Couersal = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = { main };
    script.async = true;

    document.body.appendChild(script);
  }, []);

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
                Landing template for startups
              </Typography>
              <Typography
                color="secondary"
                variant="p"
                className="hero-paragraph"
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </Typography>
              <div className="hero-cta">
                <a className="button button-primary" href="#">
                  Pre order now
                </a>
                <a className="button" href="#">
                  Get in touch
                </a>
              </div>
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
