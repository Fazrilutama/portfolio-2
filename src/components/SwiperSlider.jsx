import Link from "next/link";
import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const projects = [
  {
    id: 6,
    title: "Portfolio fazril yang ke 1",
    image: "/img/project/portfolio1.jpg",
    link: "https://github.com/Fazrilutama/Portfolio",
    repo: "https://github.com/Fazrilutama/Portfolio",
    description:
      "Ini adalah portfolio pertama yang saya buat menggunakan html, css, dan js",
  },
  {
    id: 7,
    title: "Pembelian Tiket Konser",
    image: "/img/project/konser.jpg",
    link: "https://github.com/Fazrilutama/konser",
    repo: "https://github.com/Fazrilutama/konser",
    description:
      "Ini adalah web pembelian tiket event konser infosmi secara online, dan project ini menggunakan tekhnologi php, laravel, dan tailwind css",
  },
  {
    id: 1,
    title: "Web SMKN 2 SUKABUMI",
    image: "/img/project.jpg",
    link: "https://web-smkn-2-sukabumi.vercel.app/",
    repo: "https://github.com/Fazrilutama/web-smkn-2-sukabumi",
    description:
      "Ini adalah salah satu project yang saya buat saat pkl. Project ini dibuat oleh 2 orang dengan berkolaborasi lewat github, project Web SMKN 2 SUKABUMI ini dibuat menggunahan next Js dan tailwind CSS, tugas dan job desc adalah menslicing atau mengkonversikan design yang telah dibuat tim ui/ux ",
  },
  {
    id: 2,
    title: "Konversi",
    image: "/img/konversi.png",
    link: "https://konversi-s-u-p.netlify.app/",
    repo: "https://github.com/sawala-internship/konversi.github.io",
    description:
      "Ini adalah salah satu project yang saya buat saat pkl. Web konversi Dibuat dengan Bahasa Pemrograman Javascript dibuat dengan 3 orang dan berkolaborasi lewat github, dan saya mengerjakan bagian satuan panjang",
  },
  {
    id: 3,
    title: "Game Tastingtu",
    image: "/img/1.png",
    link: "https://tastingtu.netlify.app/",
    repo: "https://github.com/Fazrilutama/Tastingtu",
    description:
      "Project ini merupakan web berbasis game sederhana yang memilki beberapa ruls pertandingan, Web ini dibuat menggunakan javascript ",
  },
  {
    id: 4,
    title: "Peminjaman Buku",
    image: "/img/project/crud-bookself.png",
    link: "https://github.com/Fazrilutama/Bookself",
    repo: "https://github.com/Fazrilutama/Bookself",
    description:
      "Project ini merupakan web berbasis Peminjaman Buku menggunakan javascript ",
  },
  {
    id: 5,
    title: "landing-page Toko Sepatu",
    image: "/img/project/landing-page1.jpg",
    link: "https://github.com/Fazrilutama/Tugas-Akhir-Web-Dicoding",
    repo: "https://github.com/Fazrilutama/Tugas-Akhir-Web-Dicoding",
    description:
      "Slicing ui dari figma ke codingan dengan html, css, dan sedikit javascript",
  },
];

const SwiperSlider = () => {
  const breakpoints = {
    640: {
      slidesPerView: 1,
    },
    // Ketika lebar layar >= 1200px (ukuran xl), set slidesPerView menjadi 4
    1024: {
      slidesPerView: 2,
    },
  };

  return (
    <>
      <div className="bg-[#1a1a1a] ">
        <div className=" container mx-auto py-20 md:py-0" id="project">
          <h1
            data-aos="zoom-out"
            className="text-center text-white text-3xl font-bold py-5 border-b-4 border-yellow-500 "
          >
            Projects
          </h1>
          <div className="py-12 md:py-28">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={breakpoints}
              className=""
            >
              {projects.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className="shadow-xl  rounded-xl  text-center p-4 lg:p-7 mx-5 bg-[#1f1f1f]"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <Link href={item.link} target="_blank">
                        <img
                          src={item.image}
                          alt="project"
                          className="rounded-2xl w-full h-48 md:h-96 lg:h-72 xl:h-96"
                        />
                      </Link>
                      <p className="text-center text-white font-bold text-xl pt-3 md:pt-5">
                        {item.title}
                      </p>
                      <p className="text-sm text-white md:text-base py-2 md:py-5">
                        {item.description}
                      </p>
                      <Link
                        target="_blank"
                        href={item.link}
                        className="text-blue-500"
                      >
                        {item.repo}
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperSlider;
