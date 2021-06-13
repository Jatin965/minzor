import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

import TeamBlock from "./TeamBlock";

import sourabh from "../../resources/sourabh.jpg";
import Akshay from "../../resources/Akshay.png";
import Neha from "../../resources/Neha.png";
import Sushmita from "../../resources/Sushmita.png";
import Krishna from "../../resources/Krishna.png";
import Aman from "../../resources/Aman.jpeg";
import Mayank from "../../resources/Mayank.jpeg";
import Shubham from "../../resources/Shubham.jpg";

const Team = () => {
  const useStyles = makeStyles({
    team: {
      padding: 10,
    },
    root: {
      width: "80vw",
      margin: "auto",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">Who we are</Typography>
      <div className={classes.team}>
        <Grid container spacing={1}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <TeamBlock
              name="Sourabh Dubey"
              position="Founder"
              image={sourabh}
            />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TeamBlock
              name="Akshay Bharmate"
              position="Developer"
              image={Akshay}
            />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TeamBlock
              name="Neha Nandankar"
              position="Web Developer"
              image={Neha}
            />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TeamBlock
              name="Sushmita Sharma"
              position="Content Writer"
              image={Sushmita}
            />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TeamBlock
              name="Krishna"
              position="Content Writer"
              image={Krishna}
            />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TeamBlock name="Aman Kumare" position="Developer" image={Aman} />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TeamBlock name="Mayank Verma" position="BDE" image={Mayank} />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TeamBlock
              name="Shubham Sahu"
              position="Developer"
              image={Shubham}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Team;
