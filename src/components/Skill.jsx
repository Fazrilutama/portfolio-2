import Image from "next/image";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    Aos.init();
  });
  const keahlian = [
    {
      id: 1,
      nama: "HTML",
      image: "/img/html.png",
    },
    {
      id: 2,
      nama: "CSS",
      image: "/img/css.png",
    },
    {
      id: 3,
      nama: "Javascript",
      image: "/img/js.png",
    },
    {
      id: 4,
      nama: "Boostrapt",
      image: "/img/boostrap.png",
    },
    {
      id: 5,
      nama: "Tailwind",
      image: "/img/tailwind.png",
    },
    {
      id: 6,
      nama: "React",
      image: "/img/React.png",
    },
    {
      id: 7,
      nama: "Next.js",
      image: "/img/next.png",
    },
  ];
  return (
    <div className="bg-[#0c0c0c] min-h-screen md:min-h-0 " id="skills">
      <div className="container mx-auto  ">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="text-3xl font-bold py-5 text-white border-b-4 border-yellow-500 text-center mx-auto "
        >
          Skills
        </h1>
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-7 lg:gap-10 lg:grid-cols-4 py-20 md:py-28  ">
          {keahlian.map((item) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                key={item.id}
                className="flex justify-center items-center bg-[#363636] mx-5 rounded-xl h-32 "
              >
                <Image
                  src={item.image}
                  alt={item.nama}
                  width={80}
                  height={80}
                />
                <h3 className="text-white font-bold text-lg pl-3">
                  {item.nama}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
