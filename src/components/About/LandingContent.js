import React from "react";

import { Typography, Grid } from "@material-ui/core";

import styles from "./About.module.css";

const LandingContent = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Typography className={styles.about} variant="h1">
          About Us
        </Typography>
        <Typography className={styles.mantra} variant="h4">
          <span>Minzor's</span> mantra of success is, <span>“</span>I THINK, I
          PLAN, I CREATE, I INNOVATE AND I SUCCEED.<span>”</span>
        </Typography>
        <Typography className={styles.typo} variant="h6">
          As a great man once said, “Individually, we are one drop. Together, we
          are an ocean.” The same goes for our compassionate and driven team at
          Minzor. Each of us has well defined roles and work as a group to
          produce wonders for you.
        </Typography>

        <div className={styles.morals}>
          <Typography className={styles.head} variant="h4">
            Rules we live by
          </Typography>
          <Typography className={styles.rule} variant="h6">
            <span>#</span> At Minzor, we embrace OBSTACLES with open arms for we
            take it to mean I CAN TACKLE ANYTHING. Problems and failures build
            your perseverance and make you relish the flavor of your success
            even more.
          </Typography>
          <Typography className={styles.rule} variant="h6">
            <span>#</span> Being a young and inspired group of professionals, a
            mix of # INNOVATION, CREATIVITY, STATE-OF-THE-ART TECHNOLOGY and,
            LOYALTY TO OUR CLIENTS is our religion.
          </Typography>
          <Typography className={styles.rule} variant="h6">
            <span>#</span> We aim at achieving long-term sustainability of your
            company through strategic planning and methodology. We channel our
            resources and energies to produce exceptional services that satisfy
            you, your clients and your stakeholders.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
