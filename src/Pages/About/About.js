import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";

const About = () => {
  const title = "About Us";
  const description = "This is our About page, here you can know more about us";
  return (
    <div>
      <PageBanner title={title} description={description} />
      <div className="text-2xl">about</div>
    </div>
  );
};

export default About;
