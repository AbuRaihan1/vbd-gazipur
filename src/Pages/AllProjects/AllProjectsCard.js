import React from "react";

const AllProjectsCard = ({ project }) => {
  const { img, title, description } = project;
  const descriptionSliceText =
    description.length > 80
      ? description.substring(0, 80) + "..."
      : description;
  return (
    <div>
      <div className=" border shadow-2xl rounded-xl">
        <img src={img} alt="project_imgs" className="w-full h-[200px]" />
        <div className="p-5">
          <h2 className="text-secondary font-bold text-3xl">{title}</h2>
          <p className="mt-5 text-lg text-justify font-semibold text-[#868585]">
            {descriptionSliceText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsCard;
