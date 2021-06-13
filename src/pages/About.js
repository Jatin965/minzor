import React from "react";

import Team from "../components/About/Team";
import LandingContent from "../components/About/LandingContent";

import { makeStyles } from "@material-ui/styles";

const About = () => {
  const useStyles = makeStyles({
    root: {
      width: "80vw",
      margin: "auto",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LandingContent />

      <Team />
    </div>
  );
};

export default About;
