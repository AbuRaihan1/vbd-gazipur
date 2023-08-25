import React from "react";
import Banner from "../../components/Banner/Banner";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
