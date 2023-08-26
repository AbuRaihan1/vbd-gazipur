import React, { useEffect } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../src/assets/images/group.jpg";
import slider2 from "../../../src/assets/images/team-with-banner.jpg";
import slider3 from "../../../src/assets/images/team-with-teacher.jpg";
import slider4 from "../../../src/assets/images/slide4.jpg";
import slider5 from "../../../src/assets/images/slide5.jpg";
import Project from "./Project";

import AOS from "aos";
import "aos/dist/aos.css";

// import Container from "@/components/Container";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./projects.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
  }, []);
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
      img: slider4,
      title: "project title",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 4,
    },
    {
      img: slider5,
      title: "project title",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 5,
    },
  ];
  return (
    <div className="pt-40 pb-5 mb-5 relative">
      <div class="custom-div"></div>
      <h2 className="absolute lg:text-5xl text-secondary top-16 font-bold text-2xl  left-[45%]">
        Projects
      </h2>
      <div className="projects">
        <Swiper
          effect={"coverflow"}
          spaceBetween={0}
          loop={true}
          slidesOffsetBefore={400}
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
          className="mySwiper projects my-10"
          data-aos="zoom-in"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="mt-12 mb-44 shadow-2xl  bg-white"
            >
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
