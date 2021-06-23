import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        height: "20px",
        alignItems: "center",
        backgroundColor: "#",
      }}
    >
      <p style={{ marginLeft: "10vw" }}>Designed by Minzor</p>

      <div style={{ left: 0 }}>
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <FacebookIcon />
      </div>
    </footer>
  );
};

export default Footer;
