import React from "react";

import Couersal from "../components/Home/Couersal";
import Landing from "../components/Home/Landing";
import Services from "../components/Home/Services";
import Clients from "../components/Home/Clients";
import Testimonial from "../components/Home/Testimonial";

import img from "../resources/BGs/1.jpg";

const Home = () => {
  return (
    <div>
      {/* <Couersal background={img} /> */}
      <Landing />
      <Services />
      <Clients />
      <Testimonial />
    </div>
  );
};

export default Home;
