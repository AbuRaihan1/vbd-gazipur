import React from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../src/assets/images/group.jpg";
import slider2 from "../../../src/assets/images/team-with-banner.jpg";
import slider3 from "../../../src/assets/images/team-with-teacher.jpg";
import Project from "./Project";
// import Container from "@/components/Container";
import "swiper/css";
import "swiper/css/effect-coverflow";
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
    {
      img: slider2,
      title: "project title",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 4,
    },
    {
      img: slider1,
      title: "project title",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 5,
    },
  ];
  return (
    <Swiper
      // slidesPerView={1}
      defaultChecked={3}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper projects my-10"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id} className="my-16 shadow-2xl">
          <Project project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
