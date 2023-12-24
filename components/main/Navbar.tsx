"use client";
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={700}
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="kaushan tracking-wider text-xl font-bold ml-[10px] hidden md:block text-gray-300">
            Punit Kumar
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              className="cursor-pointer"
            >
              About me
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              className="cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5"></div>
      </div>
    </div>
  );
};

export default Navbar;
