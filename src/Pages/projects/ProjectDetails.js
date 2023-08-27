import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = ({ projectsArray }) => {
  console.log(projectsArray);
  //   const { title, description } = project;
  return (
    <div>
      {/* <div>{title}</div> */} <p>details</p>
    </div>
  );
};

export default ProjectDetails;
