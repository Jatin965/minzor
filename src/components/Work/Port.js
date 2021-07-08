import React from "react";
import "./Work.css";

import Folio from "./Folio";

import { Grid } from "@material-ui/core";

import i1 from "../../resources/Portfolio/1.png";
import i2 from "../../resources/Portfolio/2.png";
import i3 from "../../resources/Portfolio/3.png";
import i4 from "../../resources/Portfolio/4.png";
import i5 from "../../resources/Portfolio/5.png";
import i6 from "../../resources/Portfolio/6.png";
import i7 from "../../resources/Portfolio/7.png";
import i8 from "../../resources/Portfolio/8.png";
import i9 from "../../resources/Portfolio/9.png";
import i10 from "../../resources/Portfolio/10.png";
import i11 from "../../resources/Portfolio/11.png";
import i12 from "../../resources/Portfolio/12.png";
import i13 from "../../resources/Portfolio/13.png";
import i14 from "../../resources/Portfolio/14.png";
import i15 from "../../resources/Portfolio/15.png";
import m1 from "../../resources/Portfolio/m1.png";
import m2 from "../../resources/Portfolio/m2.png";
import m3 from "../../resources/Portfolio/m3.png";
import m4 from "../../resources/Portfolio/m4.png";

const Port = () => {
  return (
    <Grid className="contain" container spacing={1}>
      <Grid item md={8} sm={12}>
        <Folio
          image={i8}
          heading="Kdrsanrachnavastu"
          projectLink="http://kdrsanrachnavastu.com/"
        />
      </Grid>
      <Grid item md={4} sm={12}>
        <Folio
          image={m1}
          heading="Buzzel"
          projectLink="https://play.google.com/store/apps/details?id=com.myapps.buzzel"
        />
      </Grid>
      <Grid item md={8} sm={12}>
        <Folio
          image={i14}
          heading="Ablis Constructions"
          projectLink="http://ablisconst.com/"
        />
      </Grid>
      <Grid item md={4} sm={12}>
        <Folio
          image={i2}
          heading="Gffoundation"
          projectLink="http://www.gffoundation.in/"
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <Folio
          image={i1}
          heading="Melwirt"
          projectLink="https://melwirt.com/"
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <Folio
          image={i15}
          heading="Nagar Palika Kareli"
          projectLink="https://nagarpalikakareli.com/"
        />
      </Grid>
      <Grid item md={4} sm={12}>
        <Folio
          image={i11}
          heading="Baba Softech Services"
          projectLink="https://babasoftechservices.com/"
        />
      </Grid>
      <Grid item md={8} sm={12}>
        <Folio
          image={i10}
          heading="Divi"
          projectLink="http://success-infinity-co-in.stackstaging.com/"
        />
      </Grid>

      <Grid item md={6} sm={12}>
        <Folio
          image={i3}
          heading="Efriendz"
          projectLink="http://efriendz.in/"
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <Folio
          image={i4}
          heading="Sehat Vegetables"
          projectLink="https://sehatvegetables.com/"
        />
      </Grid>
      <Grid item md={4} sm={12}>
        <Folio
          image={i5}
          heading="Vidya Shiksha Prachar Samiti"
          projectLink="http://vindhya-shiksha.com/"
        />
      </Grid>
      <Grid item md={8} sm={12}>
        <Folio
          image={i6}
          heading="Eduglife"
          projectLink="http://eduglife.com/"
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <Folio image={i7} heading="GrowHp" projectLink="https://growhp.com/" />
      </Grid>

      <Grid item md={6} sm={12}>
        <Folio
          image={i9}
          heading="Sunobehen"
          projectLink="https://sunobehen.com/"
        />
      </Grid>

      <Grid item md={8} sm={12}>
        <Folio
          image={i12}
          heading="Ecosphere Education"
          projectLink="https://ecosphereeducation.com/"
        />
      </Grid>
      <Grid item md={4} sm={12}>
        <Folio
          image={i13}
          heading="Ed learning"
          projectLink="http://edlearning.in/"
        />
      </Grid>

      <Grid item md={4} sm={12}>
        <Folio
          image={m2}
          heading="Efriendz"
          projectLink="https://play.google.com/store/apps/details?id=com.app.efriendz"
        />
      </Grid>
      <Grid item md={4} sm={12}>
        <Folio
          image={m3}
          heading="3D Wallpapers"
          projectLink="https://play.google.com/store/apps/details?id=com.Minzor.a3dwallpaper"
        />
      </Grid>
      <Grid item md={4} sm={12}>
        <Folio
          image={m4}
          heading="Super Ninja"
          projectLink="https://play.google.com/store/apps/details?id=com.thecodingbus.superninja"
        />
      </Grid>
    </Grid>
  );
};

export default Port;
