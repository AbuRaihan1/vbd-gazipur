import React from "react";
import Banner from "../../components/Banner/Banner";
import Projects from "../projects/Projects";
import AboutCompo from "../../components/AboutCompo/AboutCompo";
import Faq from "../../FAQ/Faq";
import WorkingFor from "../../components/WorkingFor/WorkingFor";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="">
        <AboutCompo />
        <Projects />
        <Faq />
        <WorkingFor />
      </div>
    </div>
  );
};

export default Home;
