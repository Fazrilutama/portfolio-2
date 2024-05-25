"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#363636] z-10">
      <div className=" p-4  bg-[#1c1c1d] w-full mx-auto fixed top-0 left-0 right-0 text-center border-b drop-shadow z-10">
        <div className="flex justify-between items-center px-2 md:px-7 lg:px-12">
          <h1 className="text-white text-2xl font-bold">
            <Link href="#home">
              <span className="text-yellow-400">Fazril</span> <span>Utama</span>
            </Link>
          </h1>
          <div className="hidden md:block">
            <div className="flex items-center text-md lg:text-lg gap-10 ">
              <Link
                href="#home"
                className="text-white block focus:text-yellow-400 hover:border-b-2 active:text-yellow-400 hover:border-yellow-400 hover:text-yellow-400  transition"
              >
                Home
              </Link>
              <Link
                href="#skills"
                className="text-white block focus:text-yellow-400 hover:border-b-2 active:text-yellow-400 hover:border-yellow-400 hover:text-yellow-400  transition "
              >
                Skills
              </Link>
              <Link
                href="#project"
                className="text-white block focus:text-yellow-400 hover:border-b-2 active:text-yellow-400 hover:border-yellow-400  hover:text-yellow-400 transition"
              >
                Project
              </Link>
              <Link
                href="#Sertifikat"
                className="text-white block focus:text-yellow-400 hover:border-b-2 active:text-yellow-400 hover:border-yellow-400 hover:text-yellow-400  transition"
              >
                Sertifikat
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="justify-center p-2 text-white rounded-md"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden z-10 bg-[#1c1c1d] md:bg-transparent mt-14   container p-3  w-full mx-auto fixed  left-0 right-0 text-center">
          <div className="flex flex-col text-md gap-6 mt-3 justify-center items-center  text-center py-4 ">
            <div className="text-white block focus:text-yellow-400 hover:border-b-2 active:text-yellow-400 hover:border-yellow-400 hover:text-yellow-400  transition ">
              <Link href="#home">Home</Link>
            </div>
            <div className="text-white block focus:text-yellow-400 hover:border-b-2 active:text-yellow-400 hover:border-yellow-400  hover:text-yellow-400 transition ">
              <Link href="#skills">Skills</Link>
            </div>
            <div className="text-white block focus:text-yellow-400 hover:border-b-2 active:text-yellow-400 hover:border-yellow-400 hover:text-yellow-400  transition ">
              <Link href="#project">Project</Link>
            </div>
            <div className="text-white block focus:text-yellow-400 hover:border-b-2 active:text-yellow-400 hover:border-yellow-400  hover:text-yellow-400 transition ">
              <Link href="#Sertifikat">Sertifikat</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
