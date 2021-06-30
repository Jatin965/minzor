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
            If you hit rock bottom, bounce right back up. We, at Minzor, are
            right by your side to pave your company’s way into success.
          </p>

          <div className={classes.info}>
            <div className={classes.information}>
              <MyLocationIcon fontSize="large" className={classes.icon} />
              <p>
                B-6 3rd Floor Nawada Housing Complex, Dwarka Mor, New Delhi
                110059
              </p>
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
              <a href="https://www.facebook.com/TheMinzor/">
                <FacebookIcon className={classes.ico} />
              </a>
              <a href="https://twitter.com/Minzor_">
                <TwitterIcon className={classes.ico} />
              </a>
              <a href="https://www.instagram.com/the_minzor/">
                <InstagramIcon className={classes.ico} />
              </a>
              <a href="https://www.linkedin.com/company/minzor/">
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
                placeholder="Name"
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
