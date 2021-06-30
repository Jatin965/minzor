import React from "react";

import { Typography } from "@material-ui/core";

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
            <Typography color="secondary">
              We create visual concepts, using computer software or by hand, We
              have experienced coders. We serve everything according to your
              requirement. Our coders are passionate about their work.
            </Typography>
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
            <Typography color="secondary">
              India has close to 260 million smart phone users. We understand
              best, how important is it for your app to perform good for such
              huge user base.
            </Typography>
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
            <Typography color="secondary">
              Search engine optimization is the practice of increasing the
              quantity and quality of traffic to your website through organic
              search engine results.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
