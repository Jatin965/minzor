import React, { useState, useCallback } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  IconButton,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { NavLink as Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

import NavigationDrawer from "../UI/NavigationDrawer";

import Logo from "../../resources/Logo/M.png";

const Header = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

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
      display: "flex !important",
      justifyContent: "space-around",
      textAlign: "right",
    },
    li: {
      textDecoration: "none",
      color: "#fafcf8",
      paddingRight: 10,
    },
    img: {
      height: 40,
      width: 250,
      aspectRatio: "auto",
      alignItems: "left",
    },
    toolbar: {
      width: "90vw",
    },
  });

  const menuItems = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/portfolio",
      name: "Our Work",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/contact",
      name: "Contact Us",
    },
  ];

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid item md={8} sm={10}>
            <Link to="/">
              <img className={classes.img} src={Logo} alt="Minzor" />
            </Link>
          </Grid>
          <Grid item md={4} sm={2}>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="secondary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <div className={classes.ul}>
                <Typography variant="body1">
                  <Link className={classes.li} to="/">
                    Home
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link className={classes.li} to="/about">
                    About
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link className={classes.li} to="/portfolio">
                    Our Work
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link className={classes.li} to="/contact">
                    Contact Us
                  </Link>
                </Typography>
              </div>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={isMobileDrawerOpen}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
};

export default Header;
