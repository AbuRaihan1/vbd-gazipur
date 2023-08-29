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
              JAAGO Foundation has been the pioneer in providing the youth a
              voice and a platform through its Youth Wing “Volunteer for
              Bangladesh”. In 2011 with the support of U.S. Embassy by
              empowering youths and facilitating volunteerism in Bangladesh
            </p>

            <p className="text-justify text-[#d8d5d5] font-semibold text-[18px]">
              "Volunteer for Bangladesh" is a dynamic nonprofit established in
              2011, dedicated to catalyzing positive change through
              volunteerism. Focused on education, healthcare, and sustainable
              development, the organization empowers communities and creates a
              brighter future by harnessing the energy of volunteers.
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
