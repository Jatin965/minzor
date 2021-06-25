import { Grid } from "@material-ui/core";
import React from "react";

import ClientLogo from "./ClientLogo";

import * as styles from "./Home.module.css";

import s1 from "../../resources/Clients/1.png";
import s2 from "../../resources/Clients/2.png";
import s3 from "../../resources/Clients/3.png";
import s4 from "../../resources/Clients/4.png";
import s5 from "../../resources/Clients/5.jpeg";
import s6 from "../../resources/Clients/6.png";
import s7 from "../../resources/Clients/7.jpg";
import s9 from "../../resources/Clients/9.png";
import s10 from "../../resources/Clients/10.png";
import s11 from "../../resources/Clients/11.png";
import s12 from "../../resources/Clients/12.png";
import s13 from "../../resources/Clients/13.png";
import s14 from "../../resources/Clients/14.png";
import s15 from "../../resources/Clients/15.png";
import s16 from "../../resources/Clients/16.png";
import s17 from "../../resources/Clients/17.png";
import s18 from "../../resources/Clients/18.png";
import s19 from "../../resources/Clients/19.jpeg";
import s20 from "../../resources/Clients/20.png";
import s21 from "../../resources/Clients/21.png";
import s22 from "../../resources/Clients/22.jpeg";
import s23 from "../../resources/Clients/23.png";
import s24 from "../../resources/Clients/24.jpg";
import s25 from "../../resources/Clients/25.png";
import s26 from "../../resources/Clients/26.png";

const Clients = () => {
  return (
    <div className={styles.clients}>
      <h1>Our Clients</h1>

      <Grid container spacing={1}>
        <Grid item md={3}>
          <ClientLogo image={s1} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s2} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s3} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s4} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s5} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s6} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s7} />
        </Grid>

        <Grid item md={3}>
          <ClientLogo image={s9} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s10} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s11} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s12} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s13} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s14} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s15} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s16} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s17} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s18} />
        </Grid>

        <Grid item md={3}>
          <ClientLogo image={s20} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s21} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s22} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s23} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s24} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s25} />
        </Grid>
        <Grid item md={3}>
          <ClientLogo image={s26} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Clients;
