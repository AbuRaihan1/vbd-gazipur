import React, { useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/featuresProjectsData.json").then((res) =>
      res.json().then((data) => setProjects(data))
    );
  }, []);

  return (
    <div className="pt-40  relative">
      <div class="custom-div"></div>
      <h2 className="absolute lg:text-5xl text-secondary top-16 font-bold text-3xl  left-[45%]">
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
          className="mySwiper projects"
          data-aos="zoom-in"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="mt-12 mb-44 shadow-2xl  bg-white"
            >
              <Project project={project} />
              {/* <div className="hidden">
                <ProjectDetails projectsArray={projects} />
              </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
