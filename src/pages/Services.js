import React from "react";

import { makeStyles } from "@material-ui/styles";

const Services = () => {
  const useStyles = makeStyles({
    root: {
      width: "80vw",
      margin: "auto",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Services Page.</h1>
    </div>
  );
};

export default Services;
