import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../src/assets/images/group.jpg";
import slider2 from "../../../src/assets/images/team-with-banner.jpg";
import slider3 from "../../../src/assets/images/team-with-teacher.jpg";
// import Container from "@/components/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerSlider from "./BannerSlider";

export default function Banner() {
  const bannerSlides = [
    {
      img: slider2,
      title: "LET'S REBUILD OUR NATION'S!",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 2,
    },
    {
      img: slider1,
      title: "VOLUNTEER FOR BANGLADESH",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 1,
    },
    {
      img: slider3,
      title: "WE ARE COMMITED TO OUR WORK",
      description: "project description amar shonar bangla ami tumay valobashi",
      id: 3,
    },
  ];
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
        className="select-partner-swiper lg:h-screen h-[500px] w-full"
      >
        <div className="border">
          {bannerSlides.map((bannerSingle) => (
            <SwiperSlide
              key={bannerSingle.id}
              className=" mb-44 shadow-2xl  bg-white"
            >
              <BannerSlider bannerSingle={bannerSingle} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {/* </Container> */}
    </>
  );
}
