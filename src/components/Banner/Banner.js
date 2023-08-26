import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../src/assets/images/group.jpg";
import slider2 from "../../../src/assets/images/team-with-banner.jpg";
import slider3 from "../../../src/assets/images/team-with-teacher.jpg";
// import Container from "@/components/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  return (
    <>
      {/* this files css code in global.css file, from 353 lines start */}
      {/* <Container> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper select-partner-swiper lg:h-screen h-auto w-full"
      >
        <div className="border">
          <SwiperSlide className="relative">
            <div className="text-area absolute top-24 left-20 z-10">
              <h2 className="text-3xl text-white font-semibold">
                VBD Gazipur District
              </h2>
              <h1 className="text-6xl uppercase text-white mt-3 font-bold">
                let's rebuild out nation!
              </h1>
              <p className="w-1/2 text-white font-semibold mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam ex Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Numquam obcaecati temporibus perferendis.
              </p>
            </div>
            <div>
              <img src={slider1} alt="" className="w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="h-full w-full bg-gradient-to-r from-black  black opacity-90  "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div data-aos="fade-in" className="text-area absolute top-24 left-20 z-10">
              <h2 className="text-3xl text-white font-semibold">
                VBD Gazipur District
              </h2>
              <h1 className="text-6xl uppercase text-white mt-3 font-bold w-3/4">
                we are commited to our work
              </h1>
              <p className="w-1/2 text-white font-semibold mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam ex Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Numquam obcaecati temporibus perferendis.
              </p>
            </div>
            <div>
              <img src={slider2} alt="" className="w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="h-full w-full bg-gradient-to-r from-black  black opacity-90  "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="text-area absolute top-24 left-20 z-10">
              <h2 className="text-3xl text-white font-semibold">
                VBD Gazipur District
              </h2>
              <h1 className="text-6xl uppercase text-white mt-3 font-bold">
                let's rebuild out nation!
              </h1>
              <p className="w-1/2 text-white font-semibold mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam ex Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Numquam obcaecati temporibus perferendis.
              </p>
            </div>
            <div>
              <img src={slider3} alt="" className="w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="h-full w-full bg-gradient-to-r from-black  black opacity-90  "></div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      {/* </Container> */}
    </>
  );
}
