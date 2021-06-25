import React from "react";

import classes from "./styles.module.css";

import shape from "../resources/Contact/Asset.png";

import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.container}>
      <span className={classes.bigCircle}></span>
      <img src={shape} className={classes.square} alt="" />
      <div className={classes.form}>
        <div className={classes.contactInfo}>
          <h3 className={classes.title}>Let's get in touch</h3>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className={classes.info}>
            <div className={classes.information}>
              <MyLocationIcon fontSize="large" className={classes.icon} />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className={classes.information}>
              <MailOutlineIcon fontSize="large" className={classes.icon} />
              <p>info@minzor.com</p>
            </div>
            <div className={classes.information}>
              <PhoneInTalkIcon fontSize="large" className={classes.icon} />
              <p>+91-8770689525</p>
            </div>
          </div>

          <div className={classes.socialMedia}>
            <p>Connect with us :</p>
            <div className={classes.socialIcons}>
              <a href="#">
                <FacebookIcon className={classes.ico} />
              </a>
              <a href="#">
                <TwitterIcon className={classes.ico} />
              </a>
              <a href="#">
                <InstagramIcon className={classes.ico} />
              </a>
              <a href="#">
                <LinkedInIcon className={classes.ico} />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.contactForm}>
          <span className={`${classes.circle}  ${classes.one}`}></span>
          <span className={`${classes.circle}  ${classes.two}`}></span>

          <form onSubmit={submitHandler}>
            <h3 className={classes.title}>Contact us</h3>
            <div className={classes.inputContainer}>
              <input
                placeholder="Username"
                type="text"
                color="secondary"
                className={classes.input}
              />
            </div>
            <div className={classes.inputContainer}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={classes.input}
              />
            </div>
            <div className={classes.inputContainer}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className={classes.input}
              />
            </div>
            <div className={`${classes.inputContainer}  ${classes.textarea}`}>
              <textarea
                name="message"
                placeholder="Message"
                className={classes.input}
              ></textarea>
            </div>
            <input type="submit" value="Send" className={classes.btn} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
