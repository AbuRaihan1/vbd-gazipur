import React from "react";
import Banner from "../../components/Banner/Banner";
import Projects from "../projects/Projects";
import AboutCompo from "../../components/AboutCompo/AboutCompo";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="">
        <AboutCompo />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
