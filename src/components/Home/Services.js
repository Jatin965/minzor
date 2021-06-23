import React from "react";

import styles from "./Home.module.css";

import s1 from "../../resources/Services/s1.png";
import s2 from "../../resources/Services/s2.png";
import s3 from "../../resources/Services/s3.jpg";

const Services = () => {
  return (
    <section className={styles.services}>
      {/* // heading------------ */}
      <div className={styles.sHeading}>
        <h1>Services</h1>
        <p>Here Is The Some Servies Which We Provide You.</p>
      </div>
      {/* // servicesBox-container------- */}
      <div className={styles.bContainer}>
        {/* // box-1-------------- */}
        <div className={styles.sBox}>
          {/* // img----------- */}
          <div className={styles.sBImg}>
            {/* // type--------- */}
            <div className={styles.sType}>Web Development</div>
            {/* // name----- */}
            <img src={s1} />
          </div>
          {/* // text----------------- */}
          <div className={styles.sBText}>
            <a href="#">
              With Divi, every part of your website is customizable. You have
              complete freedom to create the perfect website for you or your
              clients. Easily change colors, fonts and text styles. Apply
              stunning animations.
            </a>
          </div>
        </div>
        {/* // box-2---------------- */}
        <div className={styles.sBox}>
          {/* // img------------- */}
          <div className={styles.sBImg}>
            {/* // type--------- */}
            <div className={styles.sType}>App Development</div>
            {/* // name------- */}
            <img src={s2} />
          </div>
          {/* // text----------------- */}
          <div className={styles.sBText}>
            <a href="#">
              With Divi, every part of your website is customizable. You have
              complete freedom to create the perfect website for you or your
              clients. Easily change colors, fonts and text styles. Apply
              stunning animations.
            </a>
          </div>
        </div>
        {/* // box-3---------------- */}
        <div className={styles.sBox}>
          {/* // img------------- */}
          <div className={styles.sBImg}>
            {/* // type---------- */}
            <div className={styles.sType}>SEO</div>
            {/* // name----- */}
            <img src={s3} />
          </div>
          {/* // text--------------- */}
          <div className={styles.sBText}>
            <a href="#">
              With Divi, every part of your website is customizable. You have
              complete freedom to create the perfect website for you or your
              clients. Easily change colors, fonts and text styles. Apply
              stunning animations.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
