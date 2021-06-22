import React from "react";

import { TextField } from "@material-ui/core";

import classes from "./styles.module.css";

import shape from "../resources/Contact/shape.png";
import email from "../resources/Contact/email.png";
import location from "../resources/Contact/location.png";
import phone from "../resources/Contact/phone.png";

import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const Contact = () => {
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

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
              <img src={location} className={classes.icon} alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className={classes.information}>
              <img src={email} className={classes.icon} alt="" />
              <p>info@minzor.com</p>
            </div>
            <div className={classes.information}>
              <img src={phone} className={classes.icon} alt="" />
              <p>+91-8770689525</p>
            </div>
          </div>

          <div className={classes.socialMedia}>
            <p>Connect with us :</p>
            <div className={classes.socialIcons}>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
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
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                type="text"
                color="secondary"
                // classes={{ input: classes.input }}
              />

              <span>Username</span>
            </div>
            <div className={classes.inputContainer}>
              <input type="email" name="email" className={classes.input} />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className={classes.inputContainer}>
              <input type="tel" name="phone" className={classes.input} />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className={`${classes.inputContainer}  ${classes.textarea}`}>
              <textarea name="message" className={classes.input}></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className={classes.btn} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
