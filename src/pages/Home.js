import React from "react";

import Couersal from "../components/Home/Couersal";
import Services from "../components/Home/Services";
import Clients from "../components/Home/Clients";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Couersal />
      <Services />
      <Clients />
      <Testimonial />
    </div>
  );
};

export default Home;
