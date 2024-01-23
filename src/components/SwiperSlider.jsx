import Link from "next/link";
import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperSlider = () => {
  const breakpoints = {
    640: {
      slidesPerView: 2,
    },
    // Ketika lebar layar >= 1200px (ukuran xl), set slidesPerView menjadi 4
    1024: {
      slidesPerView: 3,
    },
  };
  return (
    <>
      <div className="bg-[#1a1a1a] py-20 md:py-0" id="project">
        <h1 className="text-center text-white text-3xl font-bold py-5 border-b-4 border-yellow-500">Projects</h1>
        <div className="py-12 md:py-28">


        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={breakpoints}
          className=""
        >
          <SwiperSlide>
            <div className="shadow-lg rounded-xl  text-center p-4 lg:p-7 mx-5 bg-[#1f1f1f] ">
              <Link href="/">
                <img
                  src="/img/project.jpg"
                  alt="project"
                  className="rounded-2xl"
                />
                <p className="text-center text-white font-bold text-xl pt-3 md:pt-5">
                  Web Sekolah SMKN 2 Sukabumi
                </p>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg rounded-xl  text-center p-4 lg:p-7 mx-5 bg-[#1f1f1f] ">
              <Link href="/">
                <img
                  src="/img/project.jpg"
                  alt="project"
                  className="rounded-2xl"
                />
                <p className="text-center text-white font-bold text-xl pt-3 md:pt-5">
                  Web Sekolah SMKN 2 Sukabumi
                </p>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg rounded-xl  text-center p-4 lg:p-7 mx-5 bg-[#1f1f1f] ">
              <Link href="/">
                <img
                  src="/img/project.jpg"
                  alt="project"
                  className="rounded-2xl"
                />
                <p className="text-center text-white font-bold text-xl pt-3 md:pt-5">
                  Web Sekolah SMKN 2 Sukabumi
                </p>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg rounded-xl  text-center p-4 lg:p-7 mx-5 bg-[#1f1f1f] ">
              <Link href="/">
                <img
                  src="/img/project.jpg"
                  alt="project"
                  className="rounded-2xl"
                />
                <p className="text-center text-white font-bold text-xl pt-3 md:pt-5">
                  Web Sekolah SMKN 2 Sukabumi
                </p>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>

      </div>
    </>
  );
};

export default SwiperSlider;
