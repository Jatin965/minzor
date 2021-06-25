import React from "react";

import { Typography, Grid } from "@material-ui/core";

import styles from "./About.module.css";

const LandingContent = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Typography className={styles.about} variant="h2">
          About Us
        </Typography>
        <Typography className={styles.mantra} variant="h4" component="p">
          <span>Minzor's</span> mantra of success is, <span>“</span>I THINK, I
          PLAN, I CREATE, I INNOVATE AND I SUCCEED.<span>”</span>
        </Typography>
        <Typography className={styles.typo} variant="h2">
          As a great man once said, “Individually, we are one drop. Together, we
          are an ocean.” The same goes for our compassionate and driven team at
          Minzor. Each of us has well defined roles and work as a group to
          produce wonders for you.
        </Typography>

        <div className={styles.morals}>
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
