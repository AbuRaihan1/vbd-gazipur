import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import Container from "@/components/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Project = ({ project }) => {
  const { img, title, description } = project;
  return (
    <SwiperSlide>
      <div className="w-1/2 mx-auto">
        <div className=" shadow-2xl rounded-xl mb-4  mx-auto border-4">
          <img src={img} alt="project_img" className="w-full rounded-t-2xl" />
          <div className="py-2 px-2">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Project;
