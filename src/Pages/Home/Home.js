import React from "react";
import Banner from "../../components/Banner/Banner";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
