import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css";
// import Container from "@/components/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const Project = ({ project, projectsArray }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const { img1, img2, img3, title, description, id } = project;
  const descriptionSliceText =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  return (
    <SwiperSlide className="">
      <div className="mx-auto h-full">
        <div className="h-full  rounded-xl mb-4  mx-auto">
          <img
            src={img3}
            alt="project_img"
            className="w-full h-[250px] rounded-t-2xl"
          />
          <div className="py-3 px-4">
            <h2 className="font-bold text-2xl ">{title}</h2>
            <p className="mt-3 text-lg text-justify">{descriptionSliceText}</p>
            <Link to={`/project-details/${id}`}>
              <button className="secondary-button mt-4">See details</button>
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Project;
