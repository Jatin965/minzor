import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

import TeamBlock from "./TeamBlock";

import sourabh from "../../resources/Team/sourabh.jpg";
import Akshay from "../../resources/Team/Akshay.png";
import Neha from "../../resources/Team/Neha.png";
import Sushmita from "../../resources/Team/Sushmita.png";
import Krishna from "../../resources/Team/Krishna.png";
import Aman from "../../resources/Team/Aman.jpeg";
import Mayank from "../../resources/Team/Mayank.jpeg";
import Shubham from "../../resources/Team/Shubham.jpg";

const Team = ({ width }) => {
  const useStyles = makeStyles({
    team: {
      padding: 10,
    },
    root: {
      width: "80vw",
      margin: "auto",
    },
    typo: {
      fontSize: "3rem",
      color: "#0d152a",
      marginTop: "40px",
    },
    para: {
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Comfortaa",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} align="center" variant="h1">
        Who we are
      </Typography>
      <Typography
        variant="p"
        component="p"
        align="center"
        className={classes.para}
      >
        Meet our team
      </Typography>

      <Grid className={classes.team} container spacing={1}>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
          data-aos="zoom-in-up"
          data-aos-delay="0"
        >
          <TeamBlock name="Sourabh Dubey" position="Founder" image={sourabh} />
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <TeamBlock
            name="Akshay Bharmate"
            position="Developer"
            image={Akshay}
          />
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <TeamBlock
            name="Neha Nandankar"
            position="Web Developer"
            image={Neha}
          />
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
          data-aos="zoom-in-up"
          data-aos-delay="600"
        >
          <TeamBlock
            name="Sushmita Sharma"
            position="Content Writer"
            image={Sushmita}
          />
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
          data-aos="zoom-in-up"
          data-aos-delay="0"
        >
          <TeamBlock name="Krishna" position="Content Writer" image={Krishna} />
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <TeamBlock name="Aman Kumare" position="Developer" image={Aman} />
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <TeamBlock name="Mayank Verma" position="BDE" image={Mayank} />
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
          data-aos="zoom-in-up"
          data-aos-delay="600"
        >
          <TeamBlock name="Shubham Sahu" position="Developer" image={Shubham} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Team;
