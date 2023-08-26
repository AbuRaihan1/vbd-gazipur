import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css";
// import Container from "@/components/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Project = ({ project }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const { img, title, description } = project;
  return (
    <SwiperSlide className="" >
      <div className="mx-auto h-full">
        <div className="h-full  rounded-xl mb-4  mx-auto">
          <img
            src={img}
            alt="project_img"
            className="w-full h-[250] rounded-t-2xl"
          />
          <div className="py-3 px-4">
            <h2 className="font-bold text-2xl ">{title}</h2>
            <p className="mt-3 text-lg text-justify">{description}</p>
            <button className="secondary-button mt-4">See details</button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Project;
