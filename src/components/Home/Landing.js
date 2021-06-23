import React from "react";

import { Grid } from "@material-ui/core";

import styles from "./Home.module.css";

import image from "../../resources/BGs/Asset.png";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Grid container spacing={2}>
        <Grid item md={6}></Grid>
        <Grid item md={6}>
          <img src={image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
