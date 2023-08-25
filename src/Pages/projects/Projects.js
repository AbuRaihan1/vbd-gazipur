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
  ];
  return (
    <div>
      <div>
        <Swiper
          //   slidesPerView={1}
          //   spaceBetween={30}
          loop={true}
          //   pagination={{
          //     clickable: true,
          //   }}
          //   navigation={true}
          //   modules={[Pagination, Navigation]}
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
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper my-5 border"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="border w-[500px]">
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
