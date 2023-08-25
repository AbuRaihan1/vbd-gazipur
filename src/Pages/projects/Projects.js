import React from "react";
import Project from "./Project";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../src/assets/images/group.jpg";
import slider2 from "../../../src/assets/images/team-with-banner.jpg";
import slider3 from "../../../src/assets/images/team-with-teacher.jpg";
// import Container from "@/components/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const projects = [
    {
      img: slider1,
      title: "project title",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 1,
    },
    {
      img: slider2,
      title: "project title",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 2,
    },
    {
      img: slider3,
      title: "project title",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 3,
    },
  ];
  return (
    <div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Project project={project}></Project>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
