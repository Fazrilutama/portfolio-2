/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const myInstagram =
    "https://www.instagram.com/fzrlutma?igsh=MThwZnUxY3N6bHZ4Mg==";
  const myFacebook =
    "https://www.facebook.com/profile.php?id=100076539854422&mibextid=ZbWKwL";
  const mylinkind =
    "https://www.linkedin.com/in/fazril-utama-28b83b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const myGithub = "https://github.com/Fazrilutama";

  return (
    <div className=" bg-[#1c1c1d]" id="home">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div
          data-aos="zoom-out"
          className="md:min-h-screen flex flex-col  md:justify-center pb-14 mt-28 md:mt-0 px-4 md:px-10 lg:px-16  order-2 md:order-1"
        >
          <div className="text-white font-bold flex flex-col gap-2 md:gap-4  ">
            <h3
              className="text-xl md:text-2xl "
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="700"
            >
              Hello, I'm
            </h3>
            <h1
              className=" text-3xl md:text-5xl"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="900"
            >
              Fazril Utama
            </h1>
            <h3 className="text-xl md:text-2xl">
              And I'm a{" "}
              <span className="text-yellow-400">
                <Typewriter
                  words={[
                    "Programer",
                    "Front End Web Developer",
                    "Content Creator",
                    "Youtuber",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle={" | "}
                />
              </span>
            </h3>
            <p
              className="font-light text-sm md:text-base"
              data-aos="flip-down"
              data-aos-duration="1500"
              data-aos-delay="1100"
            >
              Perkenalkan, saya [Nama Anda], seorang programer yang berfokus
              pada pengembangan frontend. Saya memiliki pengalaman dalam
              membangun antarmuka pengguna yang responsif dan interaktif
              menggunakan teknologi seperti HTML, CSS, JavaScript, dan framework
              seperti React dan Next.js. Selain itu, saya juga seorang content
              creator yang aktif berbagi konten terkait teknologi dan
              pengembangan web, serta beberapa konten kreatif lainnya. Saya
              senang terus belajar dan menghadapi tantangan baru dalam dunia
              teknologi
            </p>
          </div>
          <div className="py-8">
            <div className="flex gap-3 ">
              <Link
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1300"
                href={myFacebook}
                target="_blank"
                className="border-2 p-2 rounded-full border-yellow-400 transition duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="rgb(250 204 21)"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                </svg>
              </Link>

              <Link
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1400"
                href={myInstagram}
                target="_blank"
                className="border-2 p-2 rounded-full border-yellow-400 transition duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="rgb(250 204 21)"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </Link>
              <Link
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1500"
                href={myGithub}
                target="_blank"
                className="border-2 p-2 rounded-full border-yellow-400 transition duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="rgb(250 204 21)"
                  viewBox="0 0 256 256"
                >
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
              </Link>
              <Link
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1600"
                href={mylinkind}
                target="_blank"
                className="border-2 p-2 rounded-full border-yellow-400 transition duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="rgb(250 204 21)"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <Link
            href={mylinkind}
            target="_blank"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="1800"
          >
            <button className="text-md font-bold text-yellow-400 border-2 border-yellow-400 w-40 rounded-full py-2 hover:text-[#ffff] hover:bg-yellow-400 transition duration-300 ease-in-out  hover:scale-110 ">
              Download CV
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center order-1 md:order-1 px-2 md:px-7 lg:px-12 ">
          <div
            data-aos="zoom-out"
            data-aos-duration="3000"
            className=" w-[300px] h-[300px] md:w-[325x] md:h-[325px]  lg:w-[475px] lg:h-[475px] py-24 md:py-0 "
          >
            <Image
              src="/img/fazril.png"
              alt=""
              width={450}
              height={450}
              className="w-[300px] h-[300px]  lg:w-[475px] lg:h-[475px] border-4 border-yellow-400 object-cover object-center shadow-yellow-400 3xl shadow-3xl rounded-full  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
