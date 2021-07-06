import React from "react";

import * as LottiePlayer from "@lottiefiles/lottie-player";

import { Grid } from "@material-ui/core";

import styles from "./Home.module.css";

const AniServices = () => {
  return (
    <section className={styles.aniServices}>
      <div className={styles.sHeading}>
        <h1>Services</h1>
        <p>Here Is The Some Servies Which We Provide You.</p>
      </div>

      <div className={styles.aniContainer}>
        <Grid
          container
          spacing={1}
          style={{ maxWidth: "1000px", margin: "auto" }}
        >
          <Grid item md={6} sm={12}>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets1.lottiefiles.com/packages/lf20_pwohahvd.json"
              className={styles.aniBox}
            ></lottie-player>
          </Grid>
          <Grid item md={6} sm={12}>
            <h1>Web Development </h1>
            <p>
              We create visual concepts, using computer software or by hand, We
              have experienced coders. We serve everything according to your
              requirement. Our coders are passionate about their work.
            </p>
          </Grid>

          <div className={styles.aniBoxUp}>
            <Grid item md={6} sm={12}>
              <h1>App Development </h1>
              <p>
                India has close to 260 million smart phone users. We understand
                best, how important is it for your app to perform good for such
                huge user base.
              </p>
            </Grid>
            <Grid item md={6} sm={12}>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets4.lottiefiles.com/packages/lf20_M6MR7g/data.json"
                className={styles.aniBox}
              ></lottie-player>
            </Grid>
          </div>

          <Grid item md={6} sm={12}>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets4.lottiefiles.com/packages/lf20_mboC1A.json"
              className={styles.aniBox}
            ></lottie-player>
          </Grid>
          <Grid item md={6} sm={12}>
            <h1>SEO</h1>
            <p>
              Search engine optimization is the practice of increasing the
              quantity and quality of traffic to your website through organic
              search engine results.
            </p>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default AniServices;
