import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";

const AllProjects = () => {
  const title = "Our Projects";
  const description =
    "This is our project page, here you can know more about our projects";
  return (
    <div>
      <PageBanner title={title} description={description} />
      <div className="text-2xl">all projects</div>
    </div>
  );
};

export default AllProjects;
