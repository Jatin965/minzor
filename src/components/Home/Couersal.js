import React from "react";

import { Card, makeStyles } from "@material-ui/core";

const Couersal = ({ background }) => {
  const useStyles = makeStyles(() => ({
    card: {
      background: `url(${background})`,

      width: "100vw",
      height: "100vh",

      display: "flex",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <h1>Couresol</h1>
    </Card>
  );
};

export default Couersal;
