import React from "react";

import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { NavLink as Link } from "react-router-dom";

import Logo from "../../resources/Logo/M.png";

const Header = () => {
  const useStyles = makeStyles({
    root: {
      zIndex: 0,
      boxShadow: "none",
    },
    contain: {
      width: "80vw",
      margin: "auto",
    },
    ul: {
      listStyle: "none",
      display: "flex",
      justifyContent: "space-around",
      textAlign: "left",
    },
    li: {
      textDecoration: "none",
      color: "#fafcf8",
      paddingRight: 10,
      "&::after": {
        opacity: "1",
        transform: "translate3d(-100%, 0, 0)",
      },
      "&:hover::after": {
        transform: "translate3d(0, 0, 0)",
      },
    },
    img: {
      height: 40,
      width: 250,
      aspectRatio: "auto",
    },
  });

  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.contain}>
        <Grid item lg={8} sm={12}>
          <Link to="/">
            <img className={classes.img} src={Logo} alt="Minzor" />
          </Link>
        </Grid>
        <Grid item lg={4} sm={12}>
          <ul className={classes.ul}>
            {/* <li>
              <Typography variant="body1">
                <Link className={classes.li} to="/services">
                  Services
                </Link>
              </Typography>
            </li> */}
            <li>
              <Typography variant="body1">
                <Link className={classes.li} to="/portfolio">
                  Our Work
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <Link className={classes.li} to="/about">
                  About
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <Link className={classes.li} to="/contact">
                  Contact Us
                </Link>
              </Typography>
            </li>
          </ul>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
