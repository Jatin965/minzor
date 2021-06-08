import React from "react";

import { AppBar, Toolbar, Avatar, Grid, Button } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Grid item sm={12} xs={12}>
        <Toolbar>
          <Grid /*className={classes.grow}*/></Grid>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};

export default Header;
