import React from "react";

import land from "../../resources/BGs/1.png";

import { Typography, Grid } from "@material-ui/core";

import classes from "./About.module.css";

const LandingContent = () => {
  return (
    <div className={classes.bg}>
      <div className={classes.container}>
        <Typography className={classes.about} variant="h2">
          About Us
        </Typography>
        <Typography className={classes.mantra} variant="h4" component="p">
          <span>Minzor's</span> mantra of success is, <span>“</span>I THINK, I
          PLAN, I CREATE, I INNOVATE AND I SUCCEED.<span>”</span>
        </Typography>
        <Typography className={classes.typo} variant="h2">
          As a great man once said, “Individually, we are one drop. Together, we
          are an ocean.” The same goes for our compassionate and driven team at
          Minzor. Each of us has well defined roles and work as a group to
          produce wonders for you.
        </Typography>

        <div className={classes.morals}>
          <Typography variant="h4">Rules we live by</Typography>
          <Typography variant="h2">Rules we live by</Typography>
          <Typography variant="h2">Rules we live by</Typography>
          <Typography variant="h2">Rules we live by</Typography>
          <Typography variant="h2">Rules we live by</Typography>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
