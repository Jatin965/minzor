import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const TeamBlock = ({ name, position, image }) => {
  const useStyles = makeStyles({
    card: {
      maxHeight: 400,
      maxWidth: 300,
      margin: 20,
      padding: 10,
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="Minzor Team"
        height="220"
        image={image}
        title="Minzor Team"
      />

      <CardContent>
        <Typography gutterBottom variant="h6" align="center">
          {name}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          component="p"
        >
          {position}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamBlock;
