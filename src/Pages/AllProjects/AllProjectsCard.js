import React from "react";
import { Link } from "react-router-dom";

const AllProjectsCard = ({ project }) => {
  const { img1, title, description, id } = project;
  const descriptionSliceText =
    description.length > 80
      ? description.substring(0, 80) + "..."
      : description;
  return (
    <div data-aos="zoom-in" className="">
      <div className="border shadow-2xl rounded-xl min-h-[480px]">
        <img
          src={img1}
          alt="project_imgs"
          className="w-full h-[200px] rounded-t-xl"
        />
        <div className="p-5">
          <h2 className="text-secondary font-bold text-3xl">{title}</h2>
          <p className="mt-5 text-lg text-justify font-semibold text-[#868585]">
            {descriptionSliceText}
          </p>
          <Link to={`/project-details/${id}`}>
            <button className="secondary-button mt-4">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsCard;
