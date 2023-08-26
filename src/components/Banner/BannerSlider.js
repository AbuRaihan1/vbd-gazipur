import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { SwiperSlide } from "swiper/react";
const BannerSlider = ({ bannerSingle }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 300,
    });
  }, []);
  const { img, title, description } = bannerSingle;

  return (
    <SwiperSlide className="relative">
      <div className="text-area absolute lg:top-20 top-8 lg:left-16 left-12 z-10">
        <h2
          className="lg:text-3xl font-semibold text-white text-lg"
          data-aos="fade-up"
        >
          VBD Gazipur
        </h2>
        <h1
          className="lg:text-6xl text-3xl uppercase  mt-3 font-bold text-primary w-3/4"
          data-aos="fade-up"
        >
          {title}
        </h1>
        <p className="w-3/4 text-white font-semibold mt-6" data-aos="fade-up">
          {description}
        </p>
      </div>
      <div>
        <img src={img} alt="" className="md:w-full lg:h-full h-[500px]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-full w-full bg-gradient-to-r from-black  black opacity-90"></div>
      </div>
    </SwiperSlide>
  );
};

export default BannerSlider;
