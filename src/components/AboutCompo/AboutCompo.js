import React, { useEffect } from "react";
import aboutImg from "../../../src/assets/images/team-with-banner.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCompo = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 300,
    });
  }, []);
  return (
    <div>
      <div
        className="overflow-x-hidden container mx-auto my-12 bg-secondary px-5 py-10 rounded-3xl shadow-2xl"
        data-aos="fade-up"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div data-aos="fade-right">
            <img src={aboutImg} alt="about_img" className="rounded-2xl" />
          </div>
          <div data-aos="fade-left">
            <h2 className="lg:text-5xl text-3xl text-primary font-bold mb-5">
              Who we are?
            </h2>
            <p className="mb-4 text-justify text-[#CCCCCC] font-semibold text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, error ex. Modi, dolore. Repudiandae doloribus,
              recusandae iusto facere architecto quam?
            </p>

            <p className="text-justify text-black font-semibold text-[18px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus maiores maxime mollitia blanditiis quas provident illum
              eaque similique nihil debitis, culpa sapiente enim sed quod
              necessitatibus dignissimos qui minus dolorum tenetur aspernatur.
              Beatae ipsum quis harum corporis, inventore eaque perferendis!
            </p>
            <Link to="/about">
              <button className="primary-button mt-8 ">See more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompo;
