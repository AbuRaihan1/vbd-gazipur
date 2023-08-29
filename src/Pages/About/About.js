import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import AboutCompo from "../../components/AboutCompo/AboutCompo";
import Statistics from "./Statistics";

const About = () => {
  const title = "About Us";
  const description = "This is our About page, here you can know more about us";
  return (
    <div>
      <PageBanner title={title} description={description} />
      <AboutCompo />
      <Statistics />
    </div>
  );
};

export default About;
