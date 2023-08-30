import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import AboutCompo from "../../components/AboutCompo/AboutCompo";
import Statistics from "./Statistics";
import Mission from "./Mission";
import aboutBanner from "../../../src/assets/images/about_Banner.jpg";
const About = () => {
  const title = "About Us";
  const description =
    "Volunteer for Bangladesh is a youth wing of JAAGO Foundation, established in 2011 with support of U.S Embassy to Bangladesh. Its goal is to empower young people in Bangladesh to volunteer and develop leadership skills to make positive change in their communities.";
  return (
    <div>
      <PageBanner title={title} img={aboutBanner} description={description} />
      <AboutCompo />
      <Statistics />
      <Mission />
    </div>
  );
};

export default About;
