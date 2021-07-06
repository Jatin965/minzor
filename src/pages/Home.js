import React from "react";

import * as LottiePlayer from "@lottiefiles/lottie-player";

import Couersal from "../components/Home/Couersal";
import Services from "../components/Home/Services";
import AniServices from "../components/Home/AniServices";
import Clients from "../components/Home/Clients";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      {/* <lottie-player
        autoplay
        // controls="false"
        loop
        mode="normal"
        src="https://assets6.lottiefiles.com/packages/lf20_5zqv5pro.json"
        style={{
          width: "100vw ",
          background: "#0d152a",
          height: "70vh",
        }}
      ></lottie-player> */}

      <Couersal />
      {/* <Services /> */}
      <AniServices />
      <Clients />
      <Testimonial />
    </div>
  );
};

export default Home;
